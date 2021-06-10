<template>
  <v-card tile>
    <v-tabs
      v-model="x"
      background-color="secondary"
      centered
      dark
      class="rounded-sm"
      icons-and-text
    >
      <v-tab v-for="(item, id) in items" :key="id">
        <div class="d-none d-sm-flex">{{ item.tab }}</div>
        <v-icon>{{ item.icon }}</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="x">
      <v-tab-item v-for="(itemtab, index) in items" :key="index">
        <v-data-table
          :headers="itemtab.headers"
          :items="itemtab.positions"
          item-key="name"
          show-expand
          single-expand
          :items-per-page="5"
          class="elevation-1 rounded-sm"
        >
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-row>
                <v-col class="my-auto">
                  {{ item.info }}
                </v-col>
                <v-col
                  cols="auto"
                  class="my-auto"
                  v-if="itemtab.tab === 'Turnieje'"
                >
                  <v-btn :to="path">Więcej o Turnieju</v-btn>
                </v-col>
              </v-row>
            </td>
          </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class HomeTabs extends Vue {
  data() {
    return {
      x: null,
      path: '/tournament/info',
      items: [
        {
          tab: 'Turnieje',
          icon: 'mdi-tournament',
          headers: [
            { text: 'Nazwa', value: 'name', class: 'primary white--text' },
            {
              text: 'Data rozpoczęcia',
              value: 'date',
              class: 'primary white--text',
            },
            {
              text: 'System rozgrywek',
              value: 'type',
              class: 'primary white--text',
            },
            { text: 'Kraj', value: 'country', class: 'primary white--text' },
            {
              text: '',
              value: 'data-table-expand',
              class: 'primary white--text',
            },
          ],
          positions: [
            {
              name: 'Mistrzostwa Polski 2021',
              date: '2021-05-11',
              type: 'Kołowy',
              country: 'Polska',
              info: '',
            },
            {
              name: 'Mistrzostwa Czech',
              date: '2021-07-17',
              type: 'Szwajcarski',
              country: 'Czechy',
              info: '',
            },
            {
              name: 'Mistrzostwa Podkarpacia',
              date: '2021-09-30',
              type: 'Szwajcarski',
              country: 'Polska',
              info: '',
            },
            {
              name: 'Wielki Turniej Studenckiego Koła Naukowego Informatyków "KOD"',
              date: '2021-11-30',
              type: 'Kołowy',
              country: 'Polska',
              info: '',
            },
            {
              name: 'Serwis zbiorczy Grand Prix woj. warmińsko-mazurskiego',
              date: '2021-01-01',
              type: 'Szwajcarski',
              country: 'Polska',
              info: '',
            },
            {
              name: 'IV Dolnośląska Liga Szachowa 2020/2021 - okręg wrocławski',
              date: '2021-03-14',
              type: 'Kołowy',
              country: 'Polska',
              info: '',
            },
            {
              name: '242nd YMCA Spring 2021-C',
              date: '2021-04-13',
              type: 'Kołowy',
              country: 'Polska',
              info: '',
            },
            {
              name: 'III Puchar UKS MDK Gdynia',
              date: '2021-05-22',
              type: 'Szwajcarski',
              country: 'Polska',
              info: '',
            },
            {
              name: 'Liga Wojewódzka Seniorów Warmińsko-Mazurskie',
              date: '2021-05-30',
              type: 'Kołowy',
              country: 'Polska',
              info: '',
            },
            {
              name: 'Lista rankingowa PK CZERWIEC 2021',
              date: '2021-06-01',
              type: 'Szwajcarski',
              country: 'Polska',
              info: '',
            },
            {
              name: 'XX JUBILEUSZOWE MISTRZOSTWA POLSKI SŁUŻB MUNDUROWYCH',
              date: '2021-06-01',
              type: 'Szwajcarski',
              country: 'Polska',
              info: '',
            },
            {
              name:
                'Międzynarodowe Mistrzostwa Małopolski Seniorów i Juniorów - Grupa E',
              date: '2021-06-03',
              type: 'Szwajcarski',
              country: 'Polska',
              info: '',
            },
            {
              name:
                'Indywidualne Mistrzostwa Śląska Juniorów w Szachach Klasycznych',
              date: '2021-06-04',
              type: 'Szwajcarski',
              country: 'Polska',
              info: '',
            },
          ],
        },
        {
          tab: 'Kluby',
          icon: 'mdi-account-group-outline',
          headers: [
            {
              text: 'Nazwa klubu',
              value: 'name',
              class: 'primary white--text',
            },
            { text: 'Kraj', value: 'country', class: 'primary white--text' },
            {
              text: '',
              value: 'data-table-expand',
              class: 'primary white--text',
            },
          ],
          positions: [
            {
              name: 'Klub Szachowy „Polonia” Warszawa',
              country: 'Polska',
              info:
                'Klub Szachowy „Polonia” powstał w 2005 roku, 2 lata później zarejestrowano go w Polskim Związku Szachowym. Jego siedziba znajduje się przy ul. Konwiktorskiej 6. Zawodnicy tego klubu w znacznej mierze wywodzą się z KS „Polonia” Warszawa. Nie był on w stanie zapewnić odpowiedniego rozwoju szachistom z uwagi na problemy finansowe.\r\n\r\nObecnie Klub Szachowy „Polonia” Warszawa wspiera aktywnie młodych szachistów. Organizuje szkółkę szachową dla dzieci i młodzieży.',
            },
            {
              name: 'Klub Szachowy „Stilon” Gorzów Wielkopolski',
              country: 'Polska',
              info:
                'Klub Szachowy „Stilon” powstał w 1952 roku w Gorzowie Wielkopolskim. Na początku jego działalność koncentrowała się wokół amatorskiego grania w szachy, po kilku latach to się zmieniło. Członkowie klubu zaczęli odnosić sukcesy, awansowali do ligi okręgowej i międzywojewódzkiej. Wśród wybitnych szachistów należących do Stilonu wyróżnia się Roberta Kuczyńskiego, Igora Chenkina, Barbarę Kaczorowską, Pawła Jaracza, Romana Sokołowskiego czy Józefa Goldberga.',
            },
            {
              name: 'Klub Szachowy „Hetman” Katowice',
              country: 'Polska',
              info:
                'Klub Szachowy „Hetman” powstał w 1975 roku. Początkowo istniał jako sekcja szachowa w szopienickim Domu Kultury. Do jego powstania przyczynili się miłośnicy szachów, tj. Henryk Ciesielski, Alojzy Kaczmarczyk, Krystian Klimczok i Piotr Ottenburger. Klub ten odnosi sukcesy od 1976 roku, kiedy zdobył mistrzostwo klasy „A”. W ostatnich latach zawodnicy wielokrotnie zajmowali I miejsce w Drużynowych Mistrzostwach Polski. Tak było w roku 2015, 2016, 2017 czy 2018.',
            },
            {
              name: 'Krakowski Klub Szachistów 1893',
              country: 'Polska',
              info:
                'Jest to zdecydowanie jeden z najstarszych klubów szachowych nie tylko w Krakowie, ale i w Polsce. Długa historia klubu sprawia, że ma duże doświadczenie, które zdobyte zostały w licznych rozgrywkach przez zawodników. Prowadzona jest szkoła szachowa, gdzie wsparcia udzielają trenerzy. Klub może pochwalić się licznymi sukcesami w występach ligowych i turniejach. Siedzibę można znaleźć na ul. Prądnickiej 43.',
            },
            {
              name: 'UKS MDK Gdynia',
              country: 'Polska',
              info:
                'W przypadku Klubu Szachowego z Gdyni także mamy do czynienia z inicjatywą uczniowską. Został on założony w 2012 roku przez grupę rodziców i nauczycieli, w celu spopularyzowania tego sportu. Głównym celem było wykorzystanie gry w ramach wychowawczych dzieci i młodzieży i kształtowaniu w nich pożądanych cech, przydatnych w dorosłym życiu.',
            },
            {
              name: 'MUKS Stoczek – sekcja szachowa',
              country: 'Polska',
              info:
                'Jest to klub, który z powodzeniem działa już od 1995 roku, kiedy został uchwalony na zebraniu założycielskim. Znajduje się on przy szkole Podstawowej nr 45 w Białymstoku, a funkcjonująca przy nim sekcja szachowa posiada klubową licencję Polskiego Związku Szachowego, dzięki czemu każdy z uczestników ma prawo do udziału w turniejach organizowanych przez związek.',
            },
            {
              name: 'OKS Hutnik Szczecin',
              country: 'Polska',
              info:
                'W latach 1947-1948 na terenie Stołczyna działał Zakładowy Klub Sportowy „Hutnik”. Po reorganizacji sportu w 1949 roku przy Hucie na Stołczynie powstało Koło Sportowe „Stal Huta”, należące do Zrzeszenia Sportowego „Stal”. W 1969 roku nazwa została zmieniona na Hutniczy Klub Sportowy „HUTNIK”. W sierpniu 2009 roku Walne Zgromadzenie Członków Klubu zmieniło nazwę na Osiedlowy Klub Sportowy Hutnik Szczecin.',
            },
            {
              name: 'Poznańska Akademia Szachowa',
              country: 'Polska',
              info:
                'W Poznaniu działa również Akademia Szachowa, która prowadzi zajęcia zarówno dla dzieci, jak i dorosłych w grupach początkujących i zaawansowanych. Dodatkowo Akademia organizuje warsztaty szachowe dla dzieci, a nawet półkolonie szachowe. Zajęcia prowadzone są tam w grupach, bądź indywidualnie przez międzynarodowego mistrza Dominika Pędzicha, który w 1992 był reprezentantem Polski na Olimpiadzie w Manili. Dzięki czemu dzieci mogą uczyć się tam pod okiem prawdziwego profesjonalisty. Ponadto Akademia Szachowa w Poznaniu organizuje zajęcia dla dzieci w szkołach, nie tylko na terenie Poznania, ale również okolicznych miast.',
            },
            {
              name: 'Lubelski Klub Szachowy',
              country: 'Polska',
              info:
                'Lubelski Klub Szachowy znajduje się przy ul. Biernata z Lublina 20/3. Został on zarejestrowany we wrześniu 2012 roku, a jego prezesem jest Zbigniew Pyda. Na stronie klubu znaleźć można szereg informacji o zbliżających się turniejach w Lublinie i w województwie. Oprócz tego Lubelski Klub Szachowy może zorganizować szkolenia i warsztaty z grania w szachy, np. w szkołach. Zapewniona jest przy tym obsługa sędziowska. Klub oferuje również lekcje indywidualne i grupowe prowadzone przez doświadczonych instruktorów i zawodników.',
            },
            {
              name: 'UKS Korona Gdańsk',
              country: 'Polska',
              info:
                'Jednym bardziej znanych miejsc jest Uczniowski Klub Sportowy „Korona” Gdańsk, gdzie młodzi szachiści mogą stawiać swoje pierwsze kroki w tej „królewskiej grze”, a także szlifować swoje umiejętności pod okiem doświadczonych trenerów. Uczestnicy zajęć mają szansę nie tylko spędzić ciekawie czas poza lekcjami, ale też w przypadku tych najlepszych, wziąć udział z licznie organizowanych turniejach miejskich, ogólnopolskich, jak i międzynarodowych. Ten klub szachowy można znaleźć przy ul. Zielony Trójkąt 1 w Gdańsku.',
            },
            {
              name: 'Klub Szachowy „Pod Wieżą”',
              country: 'Polska',
              info:
                'Ten klub znajduje się przy ul. Dunikowskiego 6A. Tak jak i wyżej opisane kluby, również i ten zarejestrowany jest w Zachodniopomorskim Związku Szachowym. Celem klubu, czy też jego misją, jest tworzenie dogodnych warunków do umysłowej i ruchowej rekreacji, szczególnie tej zapewniającej rozwój intelektualny, jaką są szachy, oraz upowszechnianie tej formy spędzania czasu. Oferta skierowana jest do wszystkich – dzieci i młodzieży, studentów, ale także dorosłych, nie wyłączając osób starszych.',
            },
            {
              name: 'Akademia Szachowa Gambit',
              country: 'Polska',
              info:
                'Jest to szkoła, której podstawowym zadaniem jest szkolenie młodych szachistów, jednak oprócz trenowania mistrzów, ma także inne ważne cele, w tym krzewienie walorów edukacyjnych, wychowawczych i społecznych. Przede wszystkim jednak istotne jest popularyzowanie szachów i dążenie do mistrzostwa w tej królewskiej rozgrywce. Akademia skupia się na szkoleniu dzieci w wieku przedszkolnym, szkolnym, a także młodzieży oraz dorosłych. Tym samym swoje miejsce może znaleźć tam każdy. Organizowane są także turnieje, zarówno wewnątrz klubu, jak i mistrzostwa na szczeblu powiatowym. Adres: ul. Dzielna 19.',
            },
            {
              name: 'UKS Gedanensis Gdańsk',
              country: 'Polska',
              info:
                'Jest to Uczniowski Klub Sportowy, który powstał w celu krzewienia kultury fizycznej wśród dzieci i młodzieży szkolnej, w tym także naukę gry w szachy, pod okiem doświadczonych graczy. Sekcja szachowa bierze udział w organizowanych okresowo turniejach szachowych. Siedziba klubu mieści się przy ul. Dworskiej 34, jednak zajęcia szachowe mogą odbywać się również w Szkole Podstawowej w Kowale pod Gdańskiem.',
            },
          ],
        },
      ],
    };
  }
}
</script>
