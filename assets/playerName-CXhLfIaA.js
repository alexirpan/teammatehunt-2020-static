const t="playmate-name",a="honeydew-name",o=()=>{try{return localStorage.getItem(t)??localStorage.getItem(a)??""}catch{return""}},c=e=>{try{localStorage.setItem(t,e)}catch{}};export{o as l,c as s};
