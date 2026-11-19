const pages = [
  ["index.html", "Частным", "home"],
  ["business.html", "Бизнесу", "business"],
  ["tariffs.html", "Тарифы", "tariffs"],
  ["payment.html", "Оплата", "payment"],
  ["readings.html", "Показания", "readings"],
  ["offices.html", "Отделения", "offices"],
  ["about.html", "О компании", "about"],
];

const page = document.body.dataset.page || "home";

function iconBolt() {
  return `<svg class="brand-mark" viewBox="0 0 72 32" fill="none" aria-hidden="true"><path d="M1 14V8H8V2h8v6h8V2h8v6h8V2h8v6h8V2h8v6h6V14" stroke="currentColor" stroke-width="1.8" stroke-linejoin="miter"/><path d="M1 21c4-4 8-4 12 0s8 4 12 0 8-4 12-4 8 0 12 4 8 4 12 0 8-4 11-4" stroke="#3eb5f1" stroke-width="1.7" stroke-linecap="round"/><path d="M1 28c4-4 8-4 12 0s8 4 12 0 8-4 12-4 8 0 12 4 8 4 12 0 8-4 11-4" stroke="#009fe3" stroke-width="1.7" stroke-linecap="round"/></svg>`;
}

const header = document.getElementById("site-header");
if (header) {
  header.className = "site-header";
  header.innerHTML = `
    <div class="header-inner">
      <a class="logo" href="index.html">
        <span class="logo-mark">${iconBolt()}</span>
        <span><strong>АЭСК</strong><small>Астраханьэнергосбыт</small></span>
      </a>
      <nav class="nav" id="nav">
        ${pages.map(([href, label, id]) => `<a href="${href}" ${id === page ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
      </nav>
      <a class="header-phone" href="tel:+78512249000">8 (8512) 24-90-00</a>
      <button class="menu-btn" id="menu-btn" aria-label="Меню" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>`;
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 4);
  });
}

const footer = document.getElementById("site-footer");
if (footer) {
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="wrap foot-grid">
      <div>
        <a class="logo" href="index.html" style="margin-bottom:12px">
          <span class="logo-mark">${iconBolt()}</span>
          <span><strong style="color:#f6f1e6">АЭСК</strong><small>ПАО «Астраханская энергосбытовая компания»</small></span>
        </a>
        <p>Гарантирующий поставщик электроэнергии в Астраханской области.</p>
        <p>414000, г. Астрахань, ул. Бакинская, д. 149<br><a href="mailto:secr@astsbyt.ru">secr@astsbyt.ru</a></p>
      </div>
      <div>
        <h3>Жителям</h3>
        <ul>
          <li><a href="payment.html">Оплата</a></li>
          <li><a href="readings.html">Показания</a></li>
          <li><a href="tariffs.html">Тарифы</a></li>
          <li><a href="apply.html">Заявление</a></li>
        </ul>
      </div>
      <div>
        <h3>Компания</h3>
        <ul>
          <li><a href="about.html">О компании</a></li>
          <li><a href="business.html">Бизнес-клиентам</a></li>
          <li><a href="offices.html">Отделения</a></li>
          <li><a href="news.html">Новости</a></li>
        </ul>
      </div>
      <div>
        <h3>Если погас свет</h3>
        <ul>
          <li><a href="tel:88002200220">Россети Юг: 8-800-220-0-220</a></li>
          <li><a href="news.html#outage">Что делать при отключении</a></li>
          <li><a href="https://lk.astrc.ru/" target="_blank" rel="noreferrer">Личный кабинет МРЦ</a></li>
        </ul>
      </div>
    </div>
    <div class="wrap legal">Учебный макет интерфейса по мотивам публичного сайта astsbyt.ru. Оплата и передача показаний на этом макете никуда не отправляются. Официальный сайт — astsbyt.ru.</div>`;
}

if (!localStorage.getItem("aesk-cookie")) {
  const bar = document.createElement("div");
  bar.className = "cookie";
  bar.innerHTML = `<p>Сайт использует cookie, чтобы запомнить согласие и черновики форм в этом браузере.</p><button class="btn" type="button">Понятно</button>`;
  bar.querySelector("button").addEventListener("click", () => {
    localStorage.setItem("aesk-cookie", "1");
    bar.remove();
  });
  document.body.appendChild(bar);
}

const offices = [
  ["Центральный офис", "Только бизнес-клиенты", "414000, г. Астрахань, ул. Бакинская, д. 149", "8 (8512) 249-002", "Пн–Чт 08:00–17:00, Пт 08:00–15:45", "secr@astsbyt.ru"],
  ["Камызякский РОС", "Районный участок", "г. Камызяк, ул. М. Горького, д. 100", "(8512) 249-000, доб. 0100", "Пн–Чт 08:00–17:00, Пт 08:00–15:45", "01_ros@astsbyt.ru"],
  ["Икрянинский РОС", "Районный участок", "с. Икряное, ул. Советская, д. 38", "(8512) 249-000, доб. 0200", "Пн–Чт 08:00–16:00, Пт 08:00–14:45", "02_ros@astsbyt.ru"],
  ["Приволжский РОС", "Районный участок", "с. Началово, ул. Ленина, д. 44", "(8512) 249-000, доб. 0300", "Пн–Чт 08:00–16:00, Пт 08:00–14:45", "03_ros@astsbyt.ru"],
  ["Наримановский РОС", "Районный участок", "с. Солянка, ул. Дорожная, д. 1В", "(8512) 249-000, доб. 0400", "Пн–Чт 08:00–17:00, Пт 08:00–15:45", "04_ros@astsbyt.ru"],
  ["Лиманский РОС", "Районный участок", "п. Лиман, ул. Танина, д. 27", "(8512) 249-000, доб. 0500", "Пн–Чт 08:00–16:00, Пт 08:00–14:45", "05_ros@astsbyt.ru"],
  ["Харабалинский РОС", "Районный участок", "г. Харабали, ул. Терешковой, д. 7А", "(8512) 249-000, доб. 0600", "Пн–Чт 08:00–17:00, Пт 08:00–15:45", "06_ros@astsbyt.ru"],
  ["Володарский РОС", "Районный участок", "п. Володарский, ул. Чайковского, д. 23", "(8512) 249-000, доб. 0700", "Пн–Чт 08:00–16:00, Пт 08:00–14:45", "07_ros@astsbyt.ru"],
  ["Красноярский РОС", "Районный участок", "п. Красный Яр, ул. Арестова, д. 52А", "(8512) 249-000, доб. 0800", "Пн–Чт 08:00–16:00, Пт 08:00–14:45", "08_ros@astsbyt.ru"],
  ["Енотаевский РОС", "Районный участок", "с. Енотаевка, ул. Нефтяников, д. 2", "(8512) 249-000, доб. 0900", "Пн–Чт 08:00–16:00, Пт 08:00–14:45", "93_ros@astsbyt.ru"],
  ["Черноярский РОС", "Районный участок", "с. Чёрный Яр, ул. Юрия Гагарина, д. 12", "(8512) 249-000, доб. 1000", "Пн–Чт 08:00–16:00, Пт 08:00–14:45", "iboldireva@astsbyt.ru"],
  ["Ахтубинский РОС", "Районный участок", "г. Ахтубинск, ул. Шубина, д. 81", "(8512) 249-000, доб. 1100", "Пн–Чт 08:00–17:00, Пт 08:00–15:45", "11_ros@astsbyt.ru"],
  ["Капустиноярский РОС", "Районный участок", "п. Капустин Яр, ул. Советская, д. 136, кв. 1", "(8512) 249-000, доб. 1300", "Пн–Чт 08:00–16:00, Пт 08:00–14:45", "13_ros@astsbyt.ru"],
];

const officeRoot = document.getElementById("office-list");
const officeSearch = document.getElementById("office-search");
function renderOffices(query = "") {
  if (!officeRoot) return;
  const q = query.trim().toLowerCase();
  const list = offices.filter((o) => o.join(" ").toLowerCase().includes(q));
  officeRoot.innerHTML = list.length
    ? list.map(([name, kind, address, phone, hours, email]) => `
      <article class="office">
        <span class="tag">${kind}</span>
        <h3>${name}</h3>
        <p>${address}</p>
        <p>${phone}</p>
        <p>${hours}. Перерыв 12:30–13:15. Сб–Вс выходной.</p>
        <p><a href="mailto:${email}">${email}</a></p>
      </article>`).join("")
    : `<p class="muted">Ничего не нашли. Попробуйте район или улицу.</p>`;
}
if (officeRoot) {
  renderOffices();
  officeSearch?.addEventListener("input", (e) => renderOffices(e.target.value));
}

function bindForm(id, successText) {
  const form = document.getElementById(id);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const error = form.querySelector(".error");
    const data = new FormData(form);
    const required = [...form.querySelectorAll("[required]")];
    const missing = required.filter((el) => !String(el.value).trim());
    if (missing.length) {
      error.textContent = "Заполните обязательные поля.";
      missing[0].focus();
      return;
    }
    const phone = data.get("phone");
    if (phone && !/^[\d\s()+-]{6,}$/.test(String(phone))) {
      error.textContent = "Проверьте номер телефона.";
      return;
    }
    error.textContent = "";
    const payload = Object.fromEntries(data.entries());
    const key = "aesk-drafts";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    prev.unshift({ type: id, at: new Date().toISOString(), payload });
    localStorage.setItem(key, JSON.stringify(prev.slice(0, 20)));
    form.reset();
    const box = form.querySelector(".success");
    box.hidden = false;
    box.style.display = "block";
    box.textContent = successText;
  });
}

bindForm("readings-form", "Показания сохранены только в этом браузере. На официальный учёт они не ушли — для реальной передачи используйте кабинет МРЦ, телефон 8 (8512) 248-000 или офис.");
bindForm("apply-form", "Заявление сохранено локально как черновик. В компанию оно не отправлено: это учебная форма.");
