---
layout: default

title: Test
seo_description: Test
seo_keywords: test
highlited_navbar_option: test
---

## Stěny

- Nosné, nenosné
- Nový typ - duplikovat + zapnout náhled - upravit -> nastavit skladbu, rozměry, materiál, u každé vrstvy skladby funkce materiálu (ve skladbě) + nastavit funkci sendviče (stavba- funkce)
- Vynášení - výška nahoře, spodní patro , horní patro + výškové rozdíly od mezí
- Nahoře čára umístění, mezerník otočení
- Stěny další podlaží - vybrat všechny stěny -> soubor -> napravo od vložit stvy zkopírovat/ ctr c-> vložit na zarovnaná podlaží -> patro, NENAVAZUJÍ -> geometrie -> spoj -> připojit geometrii (co k čemu)
- Modelování izolace zvlášť - archi stěna, izolace, výška i přes druhé podlaží, blbé napojení v rohu = zalamování, připojíme geometrii ke stěnám !! (jinak to rozesere okna), nebo dáme automaticky připojit když už okna máme

## Dveře, okna

- dveře - upravit typ - duplikovat
- vnitřní/vnější, rozměry, rám
- umístit dveře - vlevo výška parapetru
- orientace dveří - levé, pravé
- vložit typ rodiny - načíst rfa soubornnebo načíst rodinu autodesku

- okna - záleží na sendviči jak se bude zalamovat ostění
- pokud je stěna a izolace zvlášť - dám okno do stěny a dodělám otvor v izolaci - připojit geometrii, nebo si v izolaci udělám otvor -> lepší jelikož mám přesné rozměry
- překlad - nosník - vybrat podle rozměru okna -> vložím a zkopíruju párkrát
- musíme odečíst hmotu stěny zabranou překladem - připojím geometrii překladů ke stěně - pro všechny části překladu

## Desky

- stropní deska, podlahy
- architektura -> podlaha, oddělit nosnou a podlahu
- kční podlaha - upravit typ - např žb deska
- výšky podlaží - výškové odsazení - od povrchu
- vynášení - nahoře zaškrnout prodloužit ke stěně (nosné části), dole napravo od měřítka -> úroveň detaily aby byla vidět izolace -> protáhnout na nosnou hranu (otočit šipkou) -> připojit/nepřipojit stěny (nepřipojí se -> doupravit - vybrat stěnu, karta upravit, horní připojení = stěny 1 np i 2 np (dolní napojení)
- otvor - archtektura -> podle plochy a nakreslíme otvor
- podlaha - architektonická - nenosná -> vrstvy materiálu jsou všechny v hranici nosné části -> vysunout - jedna musí zůstat

## Základy

- konstrukce - základy
- deska - výškové odsazení - pod nosné stěny - napojit stěny na desku - dolní připojení
- pasy - rozměry - na osu - pod stěny, dveřní otvor protažený přes základy -> nastavení typu pasu (vlevo) a zaškrtnou nepřerušovat u vložených objektů + protáhnout stěnu a izolaci až na pas (zvětšením rozměru od 0)

## Střecha

- vytvořit podlaží pro střechu - architektura podlaží NEBO stisknu control v řezi a posunu + pohled -> půdorysné pohledy -> půdorys -> střecha
- modelování:

* střecha v půdorysu - střecha složená z rovin
* střecha vysunutím - nakreslím průřez a protáhnu ho
* mansardová střecha na ploše - kopule, složitější

- střecha v půdorysu - vyberu stěny/ nakreslím půdorys, u každé hran definuje sklon (rovina), nedefinuje sklon (štít) - v horní liště
- -> definuje sklon, nastavit sklon napsat
- -> definuje sklon - šipka sklonu - směr řezání
- napojit na stěny - připojit
- plochá střecha - vodorovná deska (nástroj podlaha) + spádovaná vrstva + atika (stěna)… střecha v půdorysu - proměnná vrstva zaškrtnout pro jednu vrstvu, u všech hran - nedefinují sklon -> přidat bod pro vtok (upravit - horní lišta) -> upravit dílčí prvky a posunout bod dolu

## Schody

- vybrat typ kce - mon, pre, montov
- upravit typ, duplikovat - pravidla výpočtů
- Rameno - tři tečky vedle pro úpravu
- Podesta - tři tečky vedle pro úpravu
- Podpěry - stupnice, schodnice
- Vynášení vybrat - konkrétní typ schodiště, čára umístění, zábradlí vpravo nahoře po umístění

## Parametry klasifikace

- Záložka - správa -> sdílené parametry (txt) - musíme načíst do revitu
- Musíme vytvořit parametry projektu - parametry projektu -> nový parametr -> sdílený -> typ/instance - vpravo pro co bude používáno (např. dveře)
- Klasifikace - třídění prvků do skupin ->
- IFC - tab po straně
- Export ifc -> export -> ifc -> zvolit verzi
- export do dwg
- umístění projektu - správa - umístění projektu - umístění

* výkazy
  vpravo výkazy/množství pravý klik nový výkaz a nastavit info
  vybrat dostupná pole z - to co děláme

kóty
anotace

popis místností

- půdorys - architektura -> místnost a plocha > vložit popisek místnosti
- panel možnosti -> uvést požadovanou orientaci popisku, odkazová čára- odkaz
