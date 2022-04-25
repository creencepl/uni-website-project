$(document).ready(function(){
	$('.header').height($(window).height());
})

// NEWSLETTER

$("#btn-newsletter").click(function() {
	$("#myModal").modal('show');
});

// QUIZ

var QUESTIONS = [
    ["W którym roku Dwayne zadebiutował na ringu?", "1996"],
    ["Jak nazywa się bohater, w którego Dwayne wciela się w serii 'Szybcy i wściekli'?", "Luke Hobbs"],
    ["W 2021 roku Dwayne wystąpił z tą aktorką w filmie 'Czerwona nota'. Jak się ona nazywa?", "Gal Gadot"],
    ["Nazwa serialu HBO, w którym od 2015 do 2019 grał Dwayne.", "Gracze"],
    ["W którym roku urodził się 'The Rock'?", "1972"],
    ["W jakim filmie zadebiutował Johnson?", "Mumia powraca"],
    ["Jak brzmiał pseudonim Rocka podczas jego pierwszego wystąpienia na gali organizacji WWF?", "Rocky Maivia"],
    ["W ilu produkcjach Johnson wystąpił u boku Vin Diesela?", "4"],
    ["Czy Dwayne planował startować w wyborach w 2020 na prezydenta Stanów Zjednoczonych?", "Tak"],
    ["Jak nazywa się autobiografia aktora wydana w 2000 roku?", "The Rock Says"]
]

var current_question = 0;
var score = 0;

function get_answer(curr_q){
    odp = document.getElementById("odpowiedz").value;
	if(odp.toUpperCase() == QUESTIONS[curr_q][1].toUpperCase()) return 1;
	return 0;
}

function update_texts(curr_q){
	document.getElementById("nr_pytania").innerHTML = "Pytanie nr. " + (curr_q + 1);
	document.getElementById("pytanie").innerHTML = QUESTIONS[curr_q][0];
	document.getElementById("odpowiedz").value = "";
	document.getElementById("odpowiedz").focus();
}

function setup(){
    document.getElementById("pytanie").innerHTML = "W którym roku Dwayne zadebiutował na ringu?";
}

function game_ended(score){
	document.getElementById("nr_pytania").remove();
	document.getElementById("pytanie").remove();
	document.getElementById("odpowiedz").remove();
	document.getElementById("wyslij_odp").remove();
	qn = document.getElementById("quiz_name");
	qn.innerHTML = "Twój wynik to " + score + "/10! <br/>";
	if(score < 4){
		qn.innerHTML += "Naprawdę słabo znasz The Rocka..."
	}
	else if(score < 7){
		qn.innerHTML += "Twój poziom wiedzy jest całkiem niezły."
	}
	else if(score < 10){
		qn.innerHTML += "Bardzo dobrze! Znasz Dwayne'a prawie na wylot."
	}
	else{
		qn.innerHTML += "Wow! Jesteś jednym z największych fanów!"
	}
}

function quiz(){
	score += get_answer(current_question);
	current_question++;
	if(current_question == 10){
		game_ended(score);
		return;
	}
	update_texts(current_question);
}

// LOSUJ FILM
// Każde wejście na stronę powoduje wylosowanie filmu z listy
// Opisy i zdjęcia zapożyczone z serwisu filmweb.pl

var MOVIES = [
	["Agent i pół", "2016", "agent-and-half.jpg", 'Życie Boba (Dwayne Johnson) nie było usłane różami, w szkole był typowym geekiem, otyłym, wyśmiewanym i wyszydzanym, ale od tego czasu zmieniło się wszystko. Teraz Bob jest agentem CIA i wygląda jak... Dwayne Johnson. Spotkanie absolwentów szkoły jest okazją do wciągnięcia "złotego chłopca" z czasów szkoły, Calvina (Hart), w ściśle tajną sprawę, nad którą pracuje Bob. Calvin tymczasem zamienił się w znudzonego życiem księgowego, który tęskni za dniami chwały, kiedy kochały się w nim wszystkie dziewczyny, a chłopcy chcieli być taki jak on... Teraz życie Calvina zmieni się diametralnie, trafi w sam środek strzelanin, pościgów samochodowych, niebezpiecznych gangsterów i mafijnych porachunków, których... panicznie się boi.'],
	["Baywatch. Słoneczny patrol", "2017", "baywatch.jpg", 'Ratownik Mitch Buchannon (Dwayne Johnson) podejmuje walkę z potentatem paliwowym, którego działania mogą doprowadzić plażę do ekologicznej katastrofy. Mężczyzna musi połączyć siły z nielubianym przez siebie nowym, niestroniącym od zabawy członkiem drużyny ratowniczej, byłym olimpijczykiem Mattem Brodym (Zac Efron).'],
	["Szybcy i wściekli 8", "2017", "ff8.jpg", 'Dom i Letty cieszą się swym miesiącem miodowym, Brian i Mia wycofali się z gry, a reszcie ekipy udało się znaleźć oczyszczającą namiastkę normalnego życia. To właśnie wtedy pojawia się ona. Tajemnicza kobieta (Charlize Theron), która wciąga Doma w niebezpieczny świat, z którego nie ma ucieczki. Dom zdradzi najbliższych. Wszystkich czeka czas pełen prób i testów, jakich nie widzieliśmy dotąd w kinie. Od wybrzeży Kuby przez ulice Nowego Jorku po lody arktycznego morza Barentsa – „Szybcy i wściekli” przemierzą świat, by powstrzymać zło i chaos. I uratować tego, który uczynił ich rodziną.'],
	["G.I. Joe: Odwet", "2013", "gi-joe-odwet.jpg", 'Grupa G.I. Joe wraca! Oddział po raz kolejny musi zmierzyć się ze śmiertelnym wrogiem, organizacją Cobra, a także stawić czoła zupełnie nowemu niebezpieczeństwu, które czai się w kręgach rządowych. Kiedy wszystko zawodzi, pozostaje tylko jedno: Odwet. Roadblock (Dwayne Johnson) przewodzi nowemu oddziałowi doborowych żołnierzy (wśród nich są Channing Tatum i Bruce Willis) w tym dynamicznym filmie "po brzegi wypełnionym militarnymi akcjami"!'],
	["Szybcy i wściekli: Hobbs and Shaw", "2019", "hobbs-and-shaw.jpg", 'Od kiedy żyjący w zgodzie z prawem Hobbs (Johnson), lojalny agent Ochrony Służb Dyplomatycznych, oraz były pracownik elitarnych jednostek wojskowych Wielkiej Brytanii, dziś społeczny wyrzutek, Shaw (Statham), spotkali się w 2015 roku („Szybcy i wściekli 7”), pozostają w nieustannej walce – na słowa i czyny (choć pewnie lepiej byłoby napisać: ciosy). Ale sytuacja zmienia się, gdy cyber-genetycznie ulepszony anarchista Brixton (Idris Elba) przejmuje kontrolę nad bronią biologiczną, która może zmieść z powierzchni Ziemi ludzkość. Wspólnie z nieustraszoną agentką MI6 (Vanessa Kirby), która okazuje się siostrą Shawa, zajadli przeciwnicy muszą zjednoczyć się we wspólnej sprawie – by zniszczyć jedynego gościa, który jest gorszy niż oni dwaj.'],
	["Infiltrator", "2013", "snitch.jpg", 'Dwayne Johnson ("W pogoni za zemstą"), Susan Sarandon ("Klient") i Barry Pepper ("Władza") w opartym na faktach filmie scenarzysty "Drogi do szczęścia". Właściciel firmy budowlanej John Matthews (Dwayne Johnson) dowiaduje się, że jego syn trafił za kratki za handel narkotykami. Chłopakowi grozi niewspółmierny do winy wyrok – 10 lat więzienia. Zdesperowany ojciec chce mu pomóc za wszelką cenę. Za zgodą  agencji antynarkotykowej oraz prokurator stanowej (Susan Sarandon) postanawia przeniknąć do podziemnego światka przestępczego i działać tam w charakterze tajnego agenta. Misja jest potwornie niebezpieczna – aby ratować syna, John stawia na szali własne życie.'],
	["Jumanji: Przygoda w dżungli", "2017", "jumanji.jpg", 'Kiedy dzieciaki odkrywają starą konsolę gier wideo z grą "Jumanji", o której nigdy dotąd nie słyszały, natychmiast przenoszą się w świat niebezpiecznej dżungli. To właśnie w niej dzieje się akcja gry, a one stają się awatarami postaci, które wybrały: zapalony gracz Spencer staje się odważnym łowcą przygód (Dwayne Johnson), fan piłki Fridge zamienia się (według własnych słów) w Einsteina (Kevin Hart), Bethany – popularna dziewczyna z sąsiedztwa – staje się profesorem w średnim wieku (Jack Black), natomiast niepozorna Martha przybiera postać nieustraszonej wojowniczki (Karen Gillan). Wkrótce odkrywają, że w Jumanji chodzi nie tylko o grę, ale przede wszystkim o przetrwanie. Aby wygrać i powrócić do realnego świata, będą musieli wyruszyć w najbardziej niebezpieczną przygodę życia, odkrywając prawdę o sobie, albo pozostać w świecie gry na zawsze…'],
	["Jumanji: Następny poziom", "2019", "jumanji-next-level.jpg", '"Jumanji: Następny poziom” to powrót słynnych bohaterów, których poznaliśmy w "Jumanji: Przygoda w dżungli”. Tyle że zasady gry zmieniły się diametralnie. Wszyscy zmuszeni są do powrotu do świata Jumanji, by uratować jednego ze swych przyjaciół, któremu nie udało się opuścić gry. Nie spodziewają się jednak, że nic nie pójdzie zgodnie z ich oczekiwaniami. Przyjdzie im stawić czoła niebezpieczeństwom i temu, co nieznane – od jałowych pustyń przez śnieżne szczyty gór. Tylko czy uda im się wyjść z najbardziej wciągającej gry świata?'],
	["Sztanga i cash", "2013", "pain-and-gain.jpg", 'Film oparty jest na prawdziwej historii opisanej w "Miami New Times". Trzej kulturyści z Florydy: Daniel Lugo (Mark Wahlberg), Adrian Doorbal (Anthony Mackie) i Paul Doyle (Dwayne Johnson), porywają bogatego biznesmena w celu przejęcia jego majątku. Jednak sytuacja komplikuje się, gdy okradzionemu i porzuconemu na pewną śmierć mężczyźnie udaje się przeżyć. Zatrudnia on prywatnego detektywa, by odnalazł bandytów.'],
	["Rampage: Dzika furia", "2018", "rampage.jpg", 'Prymatolog Davis Okoye (Dwayne Johnson), który trzyma ludzi na dystans, nawiązał silną więź z George’em — niezwykle inteligentnym gorylem srebrnogrzbietym, którym opiekuje się od czasu jego narodzin. Niestety wskutek nieudanego eksperymentu genetycznego ta łagodnie usposobiona małpa zmienia się w gigantyczną, rozwścieczoną bestię. Na domiar złego wkrótce okazuje się, że istnieją też inne zwierzęta, które uległy podobnej przemianie. Nowo stworzone drapieżniki alfa przedzierają się przez Amerykę Północną, niszcząc wszystko na swojej drodze. Okoye łączy siły z odrzuconym przez środowisko inżynierem genetycznym, aby znaleźć antidotum. Jednocześnie stara się przetrwać na nieustannie zmieniającym się polu walki i nie tylko zapobiec globalnej katastrofie, ale też uratować przerażającą istotę, która niegdyś była jego przyjacielem.'],
	["Czerwona nota", "2021", "red-notice.jpg", 'Gdy Interpol wystawia czerwoną notę - globalny list gończy za najbardziej poszukiwanymi przestępcami na świecie - do akcji wkracza najlepszy behawiorysta z FBI John Hartley (Dwayne Johnson). W czasie pościgu przypadkiem trafia w sam środek brawurowego skoku. Aby złapać najgroźniejszego złodzieja dzieł sztuki na świecie znanego jako "The Bishop" (Gal Gadot), musi współpracować z jego rywalem Nolanem Boothem (Ryan Reynolds). Szalona przygoda rzuci to - ku niezadowoleniu niektórych - nierozłączne trio w najdalsze zakątki świata, na parkiet taneczny, do więzienia i do dżungli. "Czerwona nota" to stylowa, brawurowa gra w kotka i myszkę (i kotka).'],
	["San Andreas", "2015", "san-andreas.jpg", 'Na skutek przesunięcia, cieszącego się złą sławą, uskoku San Andreas w Kalifornii dochodzi do trzęsienia ziemi o sile 9 stopni w skali Richtera. Pilot helikoptera ratunkowego (Johnson) i jego żona, z którą nie utrzymuje kontaktów, muszą udać się z Los Angeles do San Francisco, aby uratować swoją jedyną córkę. Okazuje się jednak, że karkołomna podróż na północ jest jedynie początkiem, a gdy oboje myślą, że najgorsze już za nimi... jest tylko gorzej.'],
	["Drapacz chmur", "2018", "skyscraper.jpg", 'Ikona popkultury - Dwayne Johnson - w filmie "Drapacz chmur" wciela się w postać Willa Sawyera, byłego szefa jednostki FBI odpowiedzialnego za odbijanie zakładników oraz weterana wojennego amerykańskiej armii. Dziś Will zajmuje się ochroną wielkich wieżowców; mieszka w Chinach, gdzie odpowiedzialny jest za bezpieczeństwo największego na świecie, uznawanego za najbezpieczniejszy, drapacza chmur. Kiedy wieżowiec staje nagle w ogniu, to właśnie Will zostaje wrobiony w odpowiedzialność za gigantyczny pożar. Wie, że jest ścigany, wie też, że musi oczyścić swoje imię, ale przede wszystkim uratować rodzinę zamkniętą w płonącym budynku.'],
	["Góra czarownic", "2009", "witch-mountain.jpg", 'Pewien taksówkarz z Las Vegas zabiera dwójkę pasażerów - dzieci obdarzonych nadnaturalnymi zdolnościami. Okazuje się, że jedyną drogą do ocalenia świata jest odkrycie sekretu Góry Czarownic, a zadanie to należy właśnie do trójki podróżującej taksówką. Rozpoczynają więc niebezpieczny wyścig wraz z rządem, mafią i kosmitami podążającymi ich tropem.'],
]

function get_random_int(max) {
	return Math.floor(Math.random() * max);
}

function insert_data(){
	let movie_number = get_random_int(14);
	document.getElementById("tytul").innerHTML = MOVIES[movie_number][0] + " (" + MOVIES[movie_number][1] + ")";
	document.getElementById("plakat").src = "img/movies/" + MOVIES[movie_number][2];
	document.getElementById("opis").innerHTML = MOVIES[movie_number][3];
}

// Prosta walidacja contact form
/*
function send_message(){
	let name = document.getElementById("txtName").value;
	let email = document.getElementById("txtEmail").value;
	let phone = document.getElementById("txtPhone").value;
	let msg = document.getElementById("txtMsg").value;
	if(name && email && phone && msg){
		alert("Twoja wiadomość została wysłana!");
	}
	else{
		alert("Uzupełnij wszystkie dane!");
	}
}
*/
