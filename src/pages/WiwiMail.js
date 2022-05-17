import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";
import {StyledHeader} from "../Style";

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function getLetter(){
    const alphabet = "∣∘⋅∙❜˚˙.,⸘‛'¸˛…‑ˆ.‘¡❢❣ˉ  "
    const number = getRandom(1,alphabet.length-1)
    return alphabet[number]
}
function insertRandom(string) {
    const randomPosition = getRandom(1,string.length-1)
    const randomLetter = getLetter()
    return [string.slice(0, randomPosition), randomLetter, string.slice(randomPosition)].join('');
}

const subs = ["HU-Wiwi Mensa Beschwerde",
    "Macht die Mensa wieder auf",
    "Scheiß Backshop",
    "ANFRAGE HU MENSA WIWI FAK",
    "BackShop Rückbau%3F",
    "Wiwis wollen auch Essen",
    "Backshop + Mensa%3F",
    "erst kein Fleisch, dann keine Mensa%3F",
    "bring Backkartoffeln back! WIWI",
    "mein Hunger dein Schmerz",
    "Wie teuer soll das Essen ohne euch werden%3F",
    "Wir haben Hunger!",
    "offizielle Wiwi-Beschwerde",
    "Wo bleibt die Mensa%3F",
    "Was ist mit euch%3F Wo bleibt unser essen%3F",
    "Wie könnt ihr nur unsere Mensa dicht machen?",
    "Weshalb sollen wir durch eure Entscheidungen jetzt Hungern?",
    "Ohne Mensa kein Studium, ohne Studium keine Zukunft"]

const bodies = [
    "Sehr geehrtes Mensa-Team,  %0A \
     %0A \
    wieso habt ihr die WIWI-Mensa geschlossen%3F  %0A \
    Diese Zustände sind unhaltbar. Ich würde gerne wieder günstig essen  %0A \
    und nicht 8€ in Restaurants in der Nähe ausgeben.  %0A \
     %0A \
    Mit freundlichen Grüßen,  %0A \
    ein Student",
    "Liebes Team des STW,  %0A \
     %0A \
    wie um alles in der Welt können Sie die Mensa einfach schließen und  %0A \
    uns Studierende so hungern lassen%3F",
    "Wundervolles Mensa-Team,  %0A \
    hiermit beschwere ich mich für das Umwandeln der HU-WIWI Mensa seit  %0A \
    diesem Semester. Ich finde dies ehrlich gesagt unerhört.  %0A \
    Wofür zahlen wir Semesterbeiträge, wenn ihr Sie nicht für uns  %0A \
    verwendet%3F",
    "Hallo Mensa-Team, %0A \
    Wieso Weshalb zum Teufel muss ich jetzt 20Minuten zur nächsten Mensa  %0A \
    gurken, wenn eigentlich eine in unseren Gemächern existiert. Ein  %0A \
    Keller reicht dafür auch in der HU-WIWI aus.",
    "Wir haben Hunger Hunger Hunger haben Hunger Hunger Hunger, haben  %0A \
    Hunger Hunger Hunger, haben Durst.  %0A \
    Ne wirklich. Was soll das in der Wirtschaftsfakultät%3F Wieso müssen  %0A \
    wir unter euren kapitalistischen Einflüssen leiden. Weil ein BackShop  %0A \
    3% mehr Umsatz bildet%3F!",
    "Sehr geehrte Damen und Herren,  %0A \
     %0A \
    wir Studierende haben ohnehin schon wegen der steigenden Lebenskosten  %0A \
    wenig Geld. Weshalb nehmen Sie uns unsere quasi letzte Chance in  %0A \
    kurzer Zeit, zwischen zwei Vorlesungen, ein Mittag-Mahl zu sich zu  %0A \
    nehmen%3F  %0A \
    Ich hoffe dies ändert sich in der WIWI-Fakultät. Immerhin wird  %0A \
    das essen auch subventioniert.  %0A \
     %0A \
    Viele Grüße,  %0A \
    ein Student",
    "Allerliebstes Mensa-Team,  %0A \
    ich finde es empörend, dass die Mensa in SPA-1 aufgrund von  %0A \
    ökonomischen Gründen in einen Backshop umgewandelt wurde.  %0A \
    Wie sollen wir dann als Studies noch gesund und kostengünstig essen und   %0A \
    studieren%3F  %0A \
     %0A \
    Ich hoffe diese Umstände ändern sich.  %0A \
    Freundliche Grüße",
    "Lieber Personen hinter dieser E-Mail-Adresse, %0A \
    weshalb lasst ihr es zu, dass wir als Studierende so unter der  %0A \
    Pandemie leiden. Wir haben für alle unsere sozialen Aktivitäten  %0A \
    heruntergefahren, uns zurückgestellt für das Wohl der Gesellschaft.  %0A \
    Und als Dank dafür wird vor unseren Augen eine sichere Bezugsquelle  %0A \
    für Essen so dermaßen dezimiert, dass man auch noch sein  %0A \
    Porte-Monnaie plündern muss%3F Wie würden Sie sich fühlen%3F  %0A \
     %0A \
    Wirklich wirklich enttäuschend. Bringen Sie die Mensa in der  %0A \
    Spandauer Straße wieder zurück!  %0A \
     %0A \
    Grüße",
    "Liebe Mitarbeiter des STWs, %0A \
    %0A \
    wenn sie schon unsere Mensa dicht machen, %0A \
    kommen sie dann wenigstens mit einem FoodTruck täglich vorbei? %0A \
    Oder ist der nächste Schritt ein DeliveryService? %0A \
    Denn ehrlich gesagt seid ihr für die Studierenden mitunter eine der wichtigsten %0A \
    Institutionen, weshalb lasst ihr euch durch rote Zahlen während den Pandemiejahren beeinflussen? %0A \
    War doch klar, dass da niemand zur hausinternen Mensa des SPA 1 kommt. %0A \
    %0A \
    Ich hoffe es wird eine Lösung gefunden. %0A \
    Herzallerliebst. Ein Student."]

export default function WiwiMail() {

    const head = insertRandom(subs[getRandom(0,subs.length-1)])
    const body = insertRandom(insertRandom(bodies[getRandom(0,bodies.length-1)]))
    const sendstring = `mailto:mensen@stw.berlin?subject=${head}&body=${body}`

    return (
        <div>
            <Helmet>
                <title>Send Mail to StudierendenWerk</title>
            </Helmet>
            <Header/>
            {window.location.href = sendstring}
        </div>

    )
}

function Header() {
    return (
        <StyledHeader>
            <nav>
      <span className='logo'><NavLink to="/"> BACK TO THE MENSA </NavLink>
      </span>
            </nav>
        </StyledHeader>
    )
}
