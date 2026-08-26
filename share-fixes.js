function sydneyDateKey(){const parts=new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Sydney',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()),o=Object.fromEntries(parts.map(x=>[x.type,x.value]));return `${o.year}-${o.month}-${o.day}`}
const baseOpenPrice=openPrice;
openPrice=function(s){baseOpenPrice(s);const f=$('#priceDialog form'),date=f.querySelector('[name="date"]'),label=f.querySelector('label[for="date"]');date.id='historyPriceDate';date.value=sydneyDateKey();if(label)label.htmlFor='historyPriceDate'};
const baseOpenTransaction=openTransaction;
openTransaction=function(s,t=null){baseOpenTransaction(s,t);if(!t){const date=$('#transactionDialog form [name="date"]');date.value=sydneyDateKey()}};
const baseSharePosition=sharePosition;
sharePosition=function(s){const p=baseSharePosition(s);p.invested=s.transactions.filter(t=>t.type==='buy').reduce((a,t)=>a+num(t.quantity)*num(t.price)+num(t.fees),0);p.roi=p.invested?p.totalReturn/p.invested*100:0;return p};
