import { Suspense } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";

interface Coach {
  name: string;
  title: string;
  description: string;
  image: string;
  instagram?: string;
}

const STRENGTH_COACHES: Coach[] = [
  {
    name: "Domantas Arvasevičius",
    title: "Performance Strength",
    description: "Domanto treniruotėse mažai vietos spėlionėms - jam svarbu testuoti, matuoti ir turėti aiškų pagrindimą tam, ką darome. Treniravimo procesas struktūruotas ir paremtas objektyviais rodikliais, kurie padeda ne tik siekti geresnio fizinio pajėgumo, bet ir suprasti savo kūno galimybes. Domantui patinka matyti greitą progresą. O dar labiau - kai tą progresą galima pamatuoti ir palyginti.",
    image: "/coach_Domantas.png",
    instagram: "https://www.instagram.com/arvasevicius/",
  },
  {
    name: "Ilma Pašluostaitė",
    title: "Applied Strength",
    description: "Ilma - kineziterapeutė, todėl ir trenerės rolėje nuo to pabėgti nelabai pavyksta. Jai svarbu ne tik ką darai, bet ir kaip - suprasti judesį, išmokti jį valdyti ir tik tada pridėti daugiau svorio, greičio ar sudėtingumo. O kai jau gali - neleis savęs nuvertinti. Skatins rinktis sunkiau, truputį pakentėti ir atrasti, kad tavo galimybių ribos dažnai yra toliau, nei pats galvojai. Treniruotėse daug dėmesio technikai ir detalėms, bet tikslas nėra judėti „tobulai\". Tikslas - auginti kūną, kuriuo gali pasitikėti gyvenime.",
    image: "/coach_Ilma.png",
    instagram: "https://www.instagram.com/ilmatic__/",
  },
  {
    name: "Mikas Michelevičius",
    title: "General Strength",
    description: "Žmonių žmogus. Mikui svarbu ne tik tai, kaip juda tavo kūnas, bet ir kaip tu pats ateini į treniruotę. Pastebėti, išklausyti, sureaguoti - o kai reikia, pajuokauti ir pakelti nuotaiką. General Strength treniruotėse jo tikslas paprastas – auginti bazinę jėgą, mokytis pagrindinių judesių ir draugauti su štanga. Mikui svarbu būti ne tik tavo treniruotės, bet ir tavo dienos dalimi.",
    image: "/coach_Mikas.png",
    instagram: "https://www.instagram.com/michelevicius_/",
  },
  {
    name: "Tadas Petravičius",
    title: "Performance Strength",
    description: "Iššūkių žmogus. Iš vaikų fizinio rengimo Tadas į suaugusiųjų treniruotes atsineša žaismingumą, įvairovę ir iššūkius, kurių augant dažnai lieka vis mažiau. Performance Strength treniruotėse jis augina jėgą, bet kartu kviečia kūną spręsti, prisitaikyti ir susidoroti su tuo, kas ne visada patogu. Tadas daug rodo, taiso ir padeda fiziškai – kad judesį ne tik suprastum, bet ir pajustum.",
    image: "/coach_Tadas.png",
    instagram: "https://www.instagram.com/tadis_petravicius/",
  },
  {
    name: "Elė Ivanova",
    title: "Strength Through Pregnancy & Postpartum",
    description: "Elė - mūsų komandos wildcard'as. Akušerė-ginekologė, kurios bicepsai - jos vizitinė kortelė už ligoninės ribų. Ji perima moterų fizinį rengimą prasidėjus nėštumui - padeda išlaikyti jėgą, lydi viso nėštumo metu ir gali atsakyti į beveik visus tuo laikotarpiu kylančius „o ar galiu?\". Po gimdymo Elė padeda pasiruošti grįžimui į įprastą fizinį aktyvumą - ir tik tada paleidžia atgal į plačiuosius vandenis. Nuo štangos iki nėštumo ir atgal.",
    image: "/coach_Ele.png",
    instagram: "https://www.instagram.com/eleiv_official/",
  },
  {
    name: "Skaistė Kašėtaitė",
    title: "General Strength",
    description: "Skaistėje telpa daugiau, nei spėtum iš pirmo susitikimo - Ironman 70.3, ultra trail'ai, triatlonai ir boulderingas yra tik dalis jos sportinio smalsumo. Sportuodama ji nuolat tyrinėja savo kailiu - kaip kūnas prisitaiko, kas jam padeda ir kur galima jaustis bei judėti dar geriau. Tą patį smalsumą Skaistė atsineša ir į treniruotes - bandyti, pažinti ir atrasti, kiek daug kūnas gali.",
    image: "/coach_Skaiste.png",
    instagram: "https://www.instagram.com/skaistekas/",
  },
  {
    name: "Ugnė Grišinė",
    title: "Yoga",
    description: "Ugnė – ramybės ir švelnumo įsikūnijimas. Šilta, rūpestinga ir nuoširdžiai besidžiaugianti galėdama kitus supažindinti su jogos pasauliu. Jos treniruotėse joga nėra tik apie lankstumą ir atsipalaidavimą - čia netrūksta jėgos, balanso ir kūno kontrolės. Ugnė moko sulėtėti, geriau pajusti savo kūną ir atrasti, kiek daug jėgos gali slypėti iš pirmo žvilgsnio lengvame judesyje.",
    image: "/coach_Ugne.png",
    instagram: "https://www.instagram.com/ugne.grisine/",
  },
];

const BOXING_COACHES: Coach[] = [
  {
    name: "Titas Arvasevičius",
    title: "Boxing Adults and Youth",
    description: "Žmogus, su kuriuo bendrą kalbą, atrodo, gali rasti kiekvienas. Ilgametė patirtis bokse jam davė ne tik stiprų techninį pagrindą, bet ir gebėjimą suprasti labai skirtingus žmones. Treniruotėse su Titu lengva jaustis saugiai – jis kantrus, tolerantiškas ir moka sukurti aplinką, kurioje nebaisu mokytis, klysti ir bandyti dar kartą. Kartu jis labai dėmesingas detalėms – pastebės mažus technikos niuansus, paaiškins, pataisys ir duos laiko juos išmokti.",
    image: "/coach_Titas.png",
    instagram: "https://www.instagram.com/_titanas_/",
  },
  {
    name: "Vilius Remeika",
    title: "Boxing Adults",
    description: "Vilius - vienas naujesnių mūsų bokso trenerių, bet tikrai ne naujokas mūsų salėje. Entuziazmo boksui ir trenerio darbui jam tikrai netrūksta - kartais atrodo, kad noro treniruotis jis turi ir už save, ir už tave. Tai jei tą dieną savojo neatsinešei, didelė tikimybė, kad Vilius paskolins. Treniruotėse dėmesingas, reiklus ir neleidžiantis per daug sau nuolaidžiauti. O jei pradėsi praleidinėti treniruotes ar taupyti jėgas ten, kur nereikia - tikėkis, kad būsi pastebėtas. Ir greičiausiai dar gausi komentarą su šypsena.",
    image: "/coach_Vilius.png",
  },
  {
    name: "Eigirdas Kasmočius",
    title: "Boxing Adults",
    description: "Eigirdas - iš tų trenerių, kuriems nereikia būti garsiausiems salėje, kad jų klausytum. Bokse jis jau seniai - spėjo pabūti ir perspektyviu jaunu kovotoju, ir žmogumi su rimtomis sportinėmis ambicijomis, o dabar vis daugiau tos sukauptos patirties perkelia į trenerio darbą. Jo treniruotėse mažiau triukšmo, daugiau darbo. Eigirdas nuoseklus, reiklus ir atsakingas, o už viso to ramaus būdo vis dar gyvena tas pats kovotojas, kuris puikiai žino, ką reiškia norėti daugiau.",
    image: "/coach_Eigirdas.png",
    instagram: "https://www.instagram.com/eigirdask/",
  },
];

function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="flex flex-col xl:flex-row gap-3 xl:gap-6 xl:items-start">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={coach.image}
        alt={coach.name}
        className="w-[90%] xl:w-[196px] xl:shrink-0 h-auto rounded-[12px] mx-auto xl:mx-0"
      />
      {/* Text */}
      <div className="flex flex-col gap-1 xl:gap-2 min-w-0 w-[90%] mx-auto xl:w-auto xl:mx-0 text-center xl:text-left">
        <div className="flex items-center gap-2 justify-center xl:justify-start">
          <p className="font-sans font-bold text-[15px] xl:text-[18px] leading-snug m-0 text-[#354c41]">
            {coach.name}
          </p>
          {coach.instagram && (
            <a href={coach.instagram} target="_blank" rel="noopener noreferrer" className="shrink-0 text-[#354c41] opacity-70 hover:opacity-100 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
          )}
        </div>
        <p className="font-sans font-medium text-[12px] xl:text-[14px] leading-snug m-0 text-[#d36560]">
          {coach.title}
        </p>
        <p className="font-sans font-medium text-[12px] xl:text-[14px] leading-[1.6] m-0 text-[#354c41]">
          {coach.description}
        </p>
      </div>
    </div>
  );
}

function CoachGrid({ coaches }: { coaches: Coach[] }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-x-12 xl:gap-y-10">
      {coaches.map((coach, i) => (
        <CoachCard key={i} coach={coach} />
      ))}
    </div>
  );
}

export default function CoachesPage() {
  return (
    <div className="bg-[#fefcf8]">
      <Suspense>
        <Header />
      </Suspense>

      <main className="pt-10 xl:pt-[61px] pb-16 xl:pb-[100px]">
        <div className="container text-[#354c41]">

          {/* Strength Coaches */}
          <section className="mb-16 xl:mb-[80px]">
            <h1 className="font-heading font-black leading-normal m-0 mb-16 xl:mb-[56px] text-[36px] xl:[font-size:clamp(40px,3.9vw,70px)]">
              Strength Coaches
            </h1>
            <CoachGrid coaches={STRENGTH_COACHES} />
          </section>

          {/* Boxing Coaches */}
          <section>
            <h2 className="font-heading font-black leading-normal m-0 mb-16 xl:mb-[56px] text-[36px] xl:[font-size:clamp(40px,3.9vw,70px)]">
              Boxing Coaches
            </h2>
            <CoachGrid coaches={BOXING_COACHES} />
          </section>

        </div>
      </main>

      {/* Footer */}
      <div className="text-[#354c41] text-[16px] font-sans py-8 xl:py-0" style={{ minHeight: "63px" }}>
        <div className="container">
          <div className="flex flex-col items-center text-center gap-4 xl:flex-row xl:justify-between xl:items-center xl:text-left xl:h-[63px]">
            <p className="font-bold leading-[24px] m-0 shrink-0">Boxing · Conditioning · Recovery</p>
            <a
              href="https://maps.app.goo.gl/yQWmykY26Yv5tQY98"
              className="leading-[24px] shrink-0 no-underline text-center"
              style={{ color: "#354c41" }}
            >
              <span className="font-bold underline">Vytenio g. 52, Vilnius, Lithuania</span>
            </a>
            <p className="font-bold leading-[24px] m-0 shrink-0">+37069329099</p>
            <Link href="/membership" className="font-bold leading-[24px] m-0 underline shrink-0 no-underline" style={{ color: "#354c41" }}>Membership/Shop</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
