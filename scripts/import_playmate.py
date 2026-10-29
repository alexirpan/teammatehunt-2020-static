"""Copy the Playmate Vite build into the static site and add the site navbar.

Usage: python3 scripts/import_playmate.py ../kyoryuful-boyfriend/dist .
"""
import glob
import os
import re
import shutil
import sys

dist, site = sys.argv[1], sys.argv[2]

# Shared bundles/assets are referenced by absolute /assets/... URLs.
shutil.rmtree(os.path.join(site, 'assets'), ignore_errors=True)
shutil.copytree(os.path.join(dist, 'assets'), os.path.join(site, 'assets'))

# GameFrame scales the console to fit the window; make it fit #root (the
# space below the navbar) instead. #root resizes with the window, so the
# existing resize listeners still fire at the right times.
[frame_js] = glob.glob(os.path.join(site, 'assets', 'GameFrame-*.js'))
js = open(frame_js).read()
assert js.count('window.innerWidth,window.innerHeight') == 1, 'GameFrame scaling code changed'
js = js.replace(
    'window.innerWidth,window.innerHeight',
    '(document.getElementById("root")||document.documentElement).clientWidth,'
    '(document.getElementById("root")||document.documentElement).clientHeight')
open(frame_js, 'w').write(js)

# Remove the previous single-game export.
shutil.rmtree(os.path.join(site, 'games', 'assets'), ignore_errors=True)

src = open(os.path.join(site, 'games.html')).read()
nav = re.search(r'<nav class="jsx-516685102  collapsed">.*?</nav>', src, re.S).group(0)
nav = nav.replace(
    '<li class="jsx-2518433994 ">Games</li>',
    '<li class="jsx-2518433994 "><a title="Games" class="jsx-3907745402" href="/games">Games</a></li>')
nav_css = ''.join(
    re.search(r'<style id="__jsx-%s">(.*?)</style>' % i, src, re.S).group(1)
    for i in ['3907745402', '2518433994', '516685102'])
# Drop rules that only apply to the Next.js page layout.
nav_css = nav_css.replace('div.jsx-516685102{padding-top:40px;}', '')
nav_css = re.sub(r'#__next\{[^}]*\}', '', nav_css)

HEAD = '''    <!-- Navbar styles copied from the Next.js export (games.html) -->
    <style>
      %s
      /* Keep the navbar in the page flow so the game fills the space below it */
      body { display: flex; flex-direction: column; }
      #root { position: relative; flex: 1; min-height: 0; height: auto; }
      nav.jsx-516685102 { position: relative; flex: none; }
      .collapse-menu.jsx-516685102 { background: #fff; border-radius: 24px; }
      /* The game's console frame is sized to the viewport; fit it to the space below the navbar instead */
      #root > [class^="_container_"] { width: 100%%; height: 100%%; }
    </style>
  </head>''' % nav_css

BODY = nav + '''
    <div id="root"></div>
    <script>
      (function () {
        var nav = document.querySelector('nav.jsx-516685102');
        var btn = nav.querySelector('.collapse-menu');
        btn.addEventListener('click', function () {
          var collapsed = nav.classList.toggle('collapsed');
          btn.setAttribute('aria-expanded', String(!collapsed));
        });
      })();
    </script>'''

for page in sorted(glob.glob(os.path.join(dist, 'games', '*', 'index.html'))):
    slug = os.path.basename(os.path.dirname(page))
    h = open(page).read()
    assert h.count('  </head>') == 1 and h.count('<div id="root"></div>') == 1, page
    h = h.replace('  </head>', HEAD).replace('<div id="root"></div>', BODY)
    out = os.path.join(site, 'games', slug + '.html')
    open(out, 'w').write(h)
    print('wrote', out)
