#!/usr/bin/env python3
"""YY Builds: autonomous deterministic, zero-key portfolio/demo builder.

This demo is NOT the make.fun challenge server; no remote submission or wallet access.
"""
import json
import pathlib
from html import escape

ROOT = pathlib.Path(".")
MODELS = [
    ("GPT-4o mini", "OpenAI", "Text & code", "API", "https://platform.openai.com/docs/models"),
    ("Claude Haiku", "Anthropic", "Text & code", "API", "https://docs.anthropic.com/"),
    ("Gemini Flash", "Google", "Multimodal", "API", "https://ai.google.dev/gemini-api/docs/models"),
    ("Llama", "Meta", "Text & code", "Open weights", "https://www.llama.com/"),
    ("Qwen", "Alibaba", "Text & code", "Open weights", "https://qwenlm.github.io/"),
    ("DeepSeek", "DeepSeek", "Text & code", "API / open weights", "https://api-docs.deepseek.com/")
]

def choose(queue):
    for item in queue.get("best_candidates", []):
        if item.get("title") == "The best free AI model aggregator" and item.get("status") == "REQUIREMENTS_REVIEW_REQUIRED":
            return item
    return None

def render():
    cards = []
    for name, org, capability, access, url in MODELS:
        value = escape((name + " " + org + " " + capability).lower(), quote=True)
        cards.append('<article class="model" data-keywords="' + value + '" data-access="' + escape(access, quote=True) + '"><div class="head"><span class="tag">' + escape(org) + '</span><button type="button" class="star" data-name="' + escape(name,quote=True) + '" aria-pressed="false" aria-label="Favorite ' + escape(name,quote=True) + '">☆</button></div><h2>' + escape(name) + '</h2><p>' + escape(capability) + '</p><p class="accent">' + escape(access) + '</p><a href="' + escape(url,quote=True) + '" rel="noopener noreferrer" target="_blank">Official documentation ↗</a></article>')
    return """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Model Atlas — Explore AI models</title>
<meta name="description" content="Independent AI model family directory with search, filters and favorites">
<style>
:root{color-scheme:dark;--bg:#080e1c;--ink:#f5f8ff;--muted:#afbdd0;--accent:#8cf3d0}*{box-sizing:border-box}
body{background:radial-gradient(circle at 15% 0,#244261,transparent 45%),var(--bg);color:var(--ink);margin:0;font:16px/1.5 system-ui,-apple-system,sans-serif}
main{max-width:1100px;margin:auto;padding:34px 22px}header{max-width:790px;padding:32px 0}header small{color:var(--accent);font-weight:700;letter-spacing:.13em}
h1{font-size:clamp(38px,6vw,72px);line-height:1.07;margin:15px 0}header p,footer{color:var(--muted)}header p{font-size:18px}
.controls{display:flex;flex-wrap:wrap;gap:12px;margin:22px 0}input,select,button{font:inherit}input,select{background:#1b2a42;border:1px solid #4c617b;color:var(--ink);padding:12px 14px;border-radius:12px}
input{min-width:220px;flex:1}button{cursor:pointer}.toggle{padding:12px 15px;border:1px solid #4e6179;background:#233b52;color:#fff;border-radius:12px}
.toggle[aria-pressed=true]{border-color:var(--accent);color:var(--accent)}#count{color:var(--muted)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}.model{padding:23px;border-radius:20px;background:linear-gradient(145deg,#1a2a41,#111a2b);border:1px solid #354a63;min-height:250px}
.model[hidden]{display:none}.head{display:flex;justify-content:space-between;align-items:center}.tag{font-size:12px;border:1px solid #607b8e;border-radius:40px;padding:5px 10px}
.star{border:0;background:transparent;color:#ffd974;font-size:25px}.model h2{margin:18px 0 6px}.model p{color:var(--muted)}.model .accent,.model a{color:var(--accent)}
.model a{font-weight:650}footer{padding:30px 0;font-size:14px}input:focus-visible,select:focus-visible,button:focus-visible,a:focus-visible{outline:3px solid var(--accent);outline-offset:3px}
</style></head><body><main><header><small>MODEL ATLAS · ORIGINAL PROTOTYPE</small><h1>Find your AI model.</h1>
<p>Explore model families, filter by access type, save favorites and open official docs. No login, payment or keys. Availability can change.</p></header>
<section class="controls" aria-label="Model filters"><input id="query" type="search" placeholder="Search models, providers..." aria-label="Search"><select id="access" aria-label="Access type"><option value="">All access types</option><option value="Open weights">Open weights</option><option value="API">API</option></select>
<button id="favorites" type="button" class="toggle" aria-pressed="false">☆ Favorites only</button></section>
<p id="count" aria-live="polite"></p><section id="cards" class="grid" aria-label="Model directory">""" + "\n".join(cards) + """</section><footer>Illustrative directory, not live pricing or availability. Check provider documentation before use. YY Builds.</footer></main>
<script>
(()=>{
const query=document.getElementById('query'),access=document.getElementById('access'),only=document.getElementById('favorites'),count=document.getElementById('count');
const cards=[...document.querySelectorAll('.model')];
let saved=[];try{const s=JSON.parse(localStorage.getItem('model-atlas-favs')||'[]');if(Array.isArray(s))saved=s.filter(x=>typeof x==='string')}catch{}
const favorites=new Set(saved);
function paint(){let visible=0;for(const card of cards){const name=card.querySelector('h2').textContent;
const matches=card.dataset.keywords.includes(query.value.trim().toLowerCase())&&(!access.value||card.dataset.access.includes(access.value))&&(only.getAttribute('aria-pressed')!=='true'||favorites.has(name));
card.hidden=!matches;if(matches)visible++;const star=card.querySelector('.star');star.textContent=favorites.has(name)?'★':'☆';star.setAttribute('aria-pressed',String(favorites.has(name)));}
count.textContent=visible+' model'+(visible===1?'':'s')+' shown';}
document.querySelectorAll('.star').forEach(b=>b.addEventListener('click',()=>{const n=b.dataset.name;favorites.has(n)?favorites.delete(n):favorites.add(n);try{localStorage.setItem('model-atlas-favs',JSON.stringify([...favorites]))}catch{}paint()}));
query.addEventListener('input',paint);access.addEventListener('change',paint);only.addEventListener('click',()=>{only.setAttribute('aria-pressed',String(only.getAttribute('aria-pressed')!=='true'));paint()});paint();
})();
</script></body></html>"""

def build(root=ROOT):
    queue=json.loads((root / "data/bounty-candidates.json").read_text())
    task=choose(queue)
    if task is None:
        raise SystemExit("SKIP: No eligible supported task; no submission fabricated")
    folder=root / "bounty-work" / "free-model-aggregator-01"
    folder.mkdir(parents=True,exist_ok=True)
    (folder/"index.html").write_text(render(),encoding="utf-8")
    (folder/"README.md").write_text(
        "# Model Atlas — original prototype\n\n"
        "Functional single-file model family directory with instant search, access filters, favorites, responsive design and links to official docs.\n\n"
        "## Run\n\nOpen `index.html` locally. No API keys or installation.\n\n"
        "## Bounty\n\nCandidate: "+task["source_url"]+"\n\n"
        "**NOT A VALID CONTEST ENTRY; NOT SUBMITTED.** The bounty requires a real proxy server with OpenAI and Anthropic compatible APIs, ten simulated providers and verified agent transcripts; this static directory is only a portfolio demo. "
        "Paid ranking may require original AI-agent transcripts, signed submissions and other conditions. "
        "No session logs or guaranteed prizes are claimed.\n",encoding="utf-8")
    print("BUILT",folder,"models",len(MODELS), "candidate",task["title"])
    return folder

if __name__ == "__main__":
    build()
