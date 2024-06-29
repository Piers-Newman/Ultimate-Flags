const flags = [
    { country: "Afghanistan", flag: "https://flagcdn.com/af.svg" },
    { country: "Albania", flag: "https://flagcdn.com/al.svg" },
    { country: "Algeria", flag: "https://flagcdn.com/dz.svg" },
    { country: "Andorra", flag: "https://flagcdn.com/ad.svg" },
    { country: "Angola", flag: "https://flagcdn.com/ao.svg" },
    { country: "Antigua and Barbuda", flag: "https://flagcdn.com/ag.svg" },
    { country: "Argentina", flag: "https://flagcdn.com/ar.svg" },
    { country: "Armenia", flag: "https://flagcdn.com/am.svg" },
    { country: "Australia", flag: "https://flagcdn.com/au.svg" },
    { country: "Austria", flag: "https://flagcdn.com/at.svg" },
    { country: "Azerbaijan", flag: "https://flagcdn.com/az.svg" },
    { country: "Bahamas", flag: "https://flagcdn.com/bs.svg" },
    { country: "Bahrain", flag: "https://flagcdn.com/bh.svg" },
    { country: "Bangladesh", flag: "https://flagcdn.com/bd.svg" },
    { country: "Barbados", flag: "https://flagcdn.com/bb.svg" },
    { country: "Belarus", flag: "https://flagcdn.com/by.svg" },
    { country: "Belgium", flag: "https://flagcdn.com/be.svg" },
    { country: "Belize", flag: "https://flagcdn.com/bz.svg" },
    { country: "Benin", flag: "https://flagcdn.com/bj.svg" },
    { country: "Bhutan", flag: "https://flagcdn.com/bt.svg" },
    { country: "Bolivia", flag: "https://flagcdn.com/bo.svg" },
    { country: "Bosnia and Herzegovina", flag: "https://flagcdn.com/ba.svg" },
    { country: "Botswana", flag: "https://flagcdn.com/bw.svg" },
    { country: "Brazil", flag: "https://flagcdn.com/br.svg" },
    { country: "Brunei", flag: "https://flagcdn.com/bn.svg" },
    { country: "Bulgaria", flag: "https://flagcdn.com/bg.svg" },
    { country: "Burkina Faso", flag: "https://flagcdn.com/bf.svg" },
    { country: "Burundi", flag: "https://flagcdn.com/bi.svg" },
    { country: "Cabo Verde", flag: "https://flagcdn.com/cv.svg" },
    { country: "Cambodia", flag: "https://flagcdn.com/kh.svg" },
    { country: "Cameroon", flag: "https://flagcdn.com/cm.svg" },
    { country: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { country: "Central African Republic", flag: "https://flagcdn.com/cf.svg" },
    { country: "Chad", flag: "https://flagcdn.com/td.svg" },
    { country: "Chile", flag: "https://flagcdn.com/cl.svg" },
    { country: "China", flag: "https://flagcdn.com/cn.svg" },
    { country: "Colombia", flag: "https://flagcdn.com/co.svg" },
    { country: "Comoros", flag: "https://flagcdn.com/km.svg" },
    { country: "Congo, Democratic Republic of the", flag: "https://flagcdn.com/cd.svg" },
    { country: "Congo, Republic of the", flag: "https://flagcdn.com/cg.svg" },
    { country: "Costa Rica", flag: "https://flagcdn.com/cr.svg" },
    { country: "Croatia", flag: "https://flagcdn.com/hr.svg" },
    { country: "Cuba", flag: "https://flagcdn.com/cu.svg" },
    { country: "Cyprus", flag: "https://flagcdn.com/cy.svg" },
    { country: "Czech Republic", flag: "https://flagcdn.com/cz.svg" },
    { country: "Denmark", flag: "https://flagcdn.com/dk.svg" },
    { country: "Djibouti", flag: "https://flagcdn.com/dj.svg" },
    { country: "Dominica", flag: "https://flagcdn.com/dm.svg" },
    { country: "Dominican Republic", flag: "https://flagcdn.com/do.svg" },
    { country: "Ecuador", flag: "https://flagcdn.com/ec.svg" },
    { country: "Egypt", flag: "https://flagcdn.com/eg.svg" },
    { country: "El Salvador", flag: "https://flagcdn.com/sv.svg" },
    { country: "Equatorial Guinea", flag: "https://flagcdn.com/gq.svg" },
    { country: "Eritrea", flag: "https://flagcdn.com/er.svg" },
    { country: "Estonia", flag: "https://flagcdn.com/ee.svg" },
    { country: "Eswatini", flag: "https://flagcdn.com/sz.svg" },
    { country: "Ethiopia", flag: "https://flagcdn.com/et.svg" },
    { country: "Fiji", flag: "https://flagcdn.com/fj.svg" },
    { country: "Finland", flag: "https://flagcdn.com/fi.svg" },
    { country: "France", flag: "https://flagcdn.com/fr.svg" },
    { country: "Gabon", flag: "https://flagcdn.com/ga.svg" },
    { country: "Gambia", flag: "https://flagcdn.com/gm.svg" },
    { country: "Georgia", flag: "https://flagcdn.com/ge.svg" },
    { country: "Germany", flag: "https://flagcdn.com/de.svg" },
    { country: "Ghana", flag: "https://flagcdn.com/gh.svg" },
    { country: "Greece", flag: "https://flagcdn.com/gr.svg" },
    { country: "Grenada", flag: "https://flagcdn.com/gd.svg" },
    { country: "Guatemala", flag: "https://flagcdn.com/gt.svg" },
    { country: "Guinea", flag: "https://flagcdn.com/gn.svg" },
    { country: "Guinea-Bissau", flag: "https://flagcdn.com/gw.svg" },
    { country: "Guyana", flag: "https://flagcdn.com/gy.svg" },
    { country: "Haiti", flag: "https://flagcdn.com/ht.svg" },
    { country: "Honduras", flag: "https://flagcdn.com/hn.svg" },
    { country: "Hungary", flag: "https://flagcdn.com/hu.svg" },
    { country: "Iceland", flag: "https://flagcdn.com/is.svg" },
    { country: "India", flag: "https://flagcdn.com/in.svg" },
    { country: "Indonesia", flag: "https://flagcdn.com/id.svg" },
    { country: "Iran", flag: "https://flagcdn.com/ir.svg" },
    { country: "Iraq", flag: "https://flagcdn.com/iq.svg" },
    { country: "Ireland", flag: "https://flagcdn.com/ie.svg" },
    { country: "Israel", flag: "https://flagcdn.com/il.svg" },
    { country: "Italy", flag: "https://flagcdn.com/it.svg" },
    { country: "Jamaica", flag: "https://flagcdn.com/jm.svg" },
    { country: "Japan", flag: "https://flagcdn.com/jp.svg" },
    { country: "Jordan", flag: "https://flagcdn.com/jo.svg" },
    { country: "Kazakhstan", flag: "https://flagcdn.com/kz.svg" },
    { country: "Kenya", flag: "https://flagcdn.com/ke.svg" },
    { country: "Kiribati", flag: "https://flagcdn.com/ki.svg" },
    { country: "Kuwait", flag: "https://flagcdn.com/kw.svg" },
    { country: "Kyrgyzstan", flag: "https://flagcdn.com/kg.svg" },
    { country: "Laos", flag: "https://flagcdn.com/la.svg" },
    { country: "Latvia", flag: "https://flagcdn.com/lv.svg" },
    { country: "Lebanon", flag: "https://flagcdn.com/lb.svg" },
    { country: "Lesotho", flag: "https://flagcdn.com/ls.svg" },
    { country: "Liberia", flag: "https://flagcdn.com/lr.svg" },
    { country: "Libya", flag: "https://flagcdn.com/ly.svg" },
    { country: "Liechtenstein", flag: "https://flagcdn.com/li.svg" },
    { country: "Lithuania", flag: "https://flagcdn.com/lt.svg" },
    { country: "Luxembourg", flag: "https://flagcdn.com/lu.svg" },
    { country: "Madagascar", flag: "https://flagcdn.com/mg.svg" },
    { country: "Malawi", flag: "https://flagcdn.com/mw.svg" },
    { country: "Malaysia", flag: "https://flagcdn.com/my.svg" },
    { country: "Maldives", flag: "https://flagcdn.com/mv.svg" },
    { country: "Mali", flag: "https://flagcdn.com/ml.svg" },
    { country: "Malta", flag: "https://flagcdn.com/mt.svg" },
    { country: "Marshall Islands", flag: "https://flagcdn.com/mh.svg" },
    { country: "Mauritania", flag: "https://flagcdn.com/mr.svg" },
    { country: "Mauritius", flag: "https://flagcdn.com/mu.svg" },
    { country: "Mexico", flag: "https://flagcdn.com/mx.svg" },
    { country: "Micronesia", flag: "https://flagcdn.com/fm.svg" },
    { country: "Moldova", flag: "https://flagcdn.com/md.svg" },
    { country: "Monaco", flag: "https://flagcdn.com/mc.svg" },
    { country: "Mongolia", flag: "https://flagcdn.com/mn.svg" },
    { country: "Montenegro", flag: "https://flagcdn.com/me.svg" },
    { country: "Morocco", flag: "https://flagcdn.com/ma.svg" },
    { country: "Mozambique", flag: "https://flagcdn.com/mz.svg" },
    { country: "Myanmar", flag: "https://flagcdn.com/mm.svg" },
    { country: "Namibia", flag: "https://flagcdn.com/na.svg" },
    { country: "Nauru", flag: "https://flagcdn.com/nr.svg" },
    { country: "Nepal", flag: "https://flagcdn.com/np.svg" },
    { country: "Netherlands", flag: "https://flagcdn.com/nl.svg" },
    { country: "New Zealand", flag: "https://flagcdn.com/nz.svg" },
    { country: "Nicaragua", flag: "https://flagcdn.com/ni.svg" },
    { country: "Niger", flag: "https://flagcdn.com/ne.svg" },
    { country: "Nigeria", flag: "https://flagcdn.com/ng.svg" },
    { country: "North Korea", flag: "https://flagcdn.com/kp.svg" },
    { country: "North Macedonia", flag: "https://flagcdn.com/mk.svg" },
    { country: "Norway", flag: "https://flagcdn.com/no.svg" },
    { country: "Oman", flag: "https://flagcdn.com/om.svg" },
    { country: "Pakistan", flag: "https://flagcdn.com/pk.svg" },
    { country: "Palau", flag: "https://flagcdn.com/pw.svg" },
    { country: "Palestine", flag: "https://flagcdn.com/ps.svg" },
    { country: "Panama", flag: "https://flagcdn.com/pa.svg" },
    { country: "Papua New Guinea", flag: "https://flagcdn.com/pg.svg" },
    { country: "Paraguay", flag: "https://flagcdn.com/py.svg" },
    { country: "Peru", flag: "https://flagcdn.com/pe.svg" },
    { country: "Philippines", flag: "https://flagcdn.com/ph.svg" },
    { country: "Poland", flag: "https://flagcdn.com/pl.svg" },
    { country: "Portugal", flag: "https://flagcdn.com/pt.svg" },
    { country: "Qatar", flag: "https://flagcdn.com/qa.svg" },
    { country: "Romania", flag: "https://flagcdn.com/ro.svg" },
    { country: "Russia", flag: "https://flagcdn.com/ru.svg" },
    { country: "Rwanda", flag: "https://flagcdn.com/rw.svg" },
    { country: "Saint Kitts and Nevis", flag: "https://flagcdn.com/kn.svg" },
    { country: "Saint Lucia", flag: "https://flagcdn.com/lc.svg" },
    { country: "Saint Vincent and the Grenadines", flag: "https://flagcdn.com/vc.svg" },
    { country: "Samoa", flag: "https://flagcdn.com/ws.svg" },
    { country: "San Marino", flag: "https://flagcdn.com/sm.svg" },
    { country: "Sao Tome and Principe", flag: "https://flagcdn.com/st.svg" },
    { country: "Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
    { country: "Senegal", flag: "https://flagcdn.com/sn.svg" },
    { country: "Serbia", flag: "https://flagcdn.com/rs.svg" },
    { country: "Seychelles", flag: "https://flagcdn.com/sc.svg" },
    { country: "Sierra Leone", flag: "https://flagcdn.com/sl.svg" },
    { country: "Singapore", flag: "https://flagcdn.com/sg.svg" },
    { country: "Slovakia", flag: "https://flagcdn.com/sk.svg" },
    { country: "Slovenia", flag: "https://flagcdn.com/si.svg" },
    { country: "Solomon Islands", flag: "https://flagcdn.com/sb.svg" },
    { country: "Somalia", flag: "https://flagcdn.com/so.svg" },
    { country: "South Africa", flag: "https://flagcdn.com/za.svg" },
    { country: "South Korea", flag: "https://flagcdn.com/kr.svg" },
    { country: "South Sudan", flag: "https://flagcdn.com/ss.svg" },
    { country: "Spain", flag: "https://flagcdn.com/es.svg" },
    { country: "Sri Lanka", flag: "https://flagcdn.com/lk.svg" },
    { country: "Sudan", flag: "https://flagcdn.com/sd.svg" },
    { country: "Suriname", flag: "https://flagcdn.com/sr.svg" },
    { country: "Sweden", flag: "https://flagcdn.com/se.svg" },
    { country: "Switzerland", flag: "https://flagcdn.com/ch.svg" },
    { country: "Syria", flag: "https://flagcdn.com/sy.svg" },
    { country: "Taiwan", flag: "https://flagcdn.com/tw.svg" },
    { country: "Tajikistan", flag: "https://flagcdn.com/tj.svg" },
    { country: "Tanzania", flag: "https://flagcdn.com/tz.svg" },
    { country: "Thailand", flag: "https://flagcdn.com/th.svg" },
    { country: "Timor-Leste", flag: "https://flagcdn.com/tl.svg" },
    { country: "Togo", flag: "https://flagcdn.com/tg.svg" },
    { country: "Tonga", flag: "https://flagcdn.com/to.svg" },
    { country: "Trinidad and Tobago", flag: "https://flagcdn.com/tt.svg" },
    { country: "Tunisia", flag: "https://flagcdn.com/tn.svg" },
    { country: "Turkey", flag: "https://flagcdn.com/tr.svg" },
    { country: "Turkmenistan", flag: "https://flagcdn.com/tm.svg" },
    { country: "Tuvalu", flag: "https://flagcdn.com/tv.svg" },
    { country: "Uganda", flag: "https://flagcdn.com/ug.svg" },
    { country: "Ukraine", flag: "https://flagcdn.com/ua.svg" },
    { country: "United Arab Emirates", flag: "https://flagcdn.com/ae.svg" },
    { country: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { country: "United States", flag: "https://flagcdn.com/us.svg" },
    { country: "Uruguay", flag: "https://flagcdn.com/uy.svg" },
    { country: "Uzbekistan", flag: "https://flagcdn.com/uz.svg" },
    { country: "Vanuatu", flag: "https://flagcdn.com/vu.svg" },
    { country: "Vatican City", flag: "https://flagcdn.com/va.svg" },
    { country: "Venezuela", flag: "https://flagcdn.com/ve.svg" },
    { country: "Vietnam", flag: "https://flagcdn.com/vn.svg" },
    { country: "Yemen", flag: "https://flagcdn.com/ye.svg" },
    { country: "Zambia", flag: "https://flagcdn.com/zm.svg" },
    { country: "Zimbabwe", flag: "https://flagcdn.com/zw.svg" },
    // Add more countries and flags as needed
];

let currentFlagIndex = Math.floor(Math.random() * flags.length);
let currentStreak = 0;
let highestStreak = 0;
let totalAttempts = 0;
let wins = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadFlag();
    updateStats();
    setupDarkModeToggle();

    const guessInput = document.getElementById("guess-input");
    const suggestionsContainer = document.getElementById("suggestions");

    guessInput.addEventListener("input", () => {
        const value = guessInput.value.toLowerCase();
        suggestionsContainer.innerHTML = "";
        if (value) {
            const suggestions = flags.filter(flag => flag.country.toLowerCase().startsWith(value)).map(flag => flag.country);
            suggestions.forEach(suggestion => {
                const suggestionElement = document.createElement("div");
                suggestionElement.textContent = suggestion;
                suggestionElement.addEventListener("click", () => {
                    guessInput.value = suggestion;
                    suggestionsContainer.innerHTML = "";
                });
                suggestionsContainer.appendChild(suggestionElement);
            });
        }
    });

    document.getElementById("guess-button").addEventListener("click", () => {
        const guess = guessInput.value.trim().toLowerCase();
        const result = document.getElementById("result");
        const container = document.querySelector(".container");
        totalAttempts++;
        if (guess === flags[currentFlagIndex].country.toLowerCase()) {
            wins++;
            currentStreak++;
            if (currentStreak > highestStreak) highestStreak = currentStreak;
            result.textContent = "Correct! It's " + flags[currentFlagIndex].country + "!";
            result.style.color = "green";
            container.style.animation = "greenFlash 1s";
            setTimeout(() => {
                container.style.animation = "";
                result.textContent = "";
                nextFlag();
                guessInput.value = "";
                suggestionsContainer.innerHTML = "";
            }, 2000);
        } else {
            currentStreak = 0;
            result.textContent = "Incorrect. Try again!";
            result.style.color = "red";
        }
        updateStats();
    });

    document.getElementById("skip-button").addEventListener("click", () => {
        totalAttempts++;
        currentStreak = 0;
        const result = document.getElementById("result");
        result.textContent = "The correct answer was " + flags[currentFlagIndex].country + ".";
        result.style.color = "blue";
        setTimeout(() => {
            result.textContent = "";
            nextFlag();
            document.getElementById("guess-input").value = "";
            suggestionsContainer.innerHTML = "";
        }, 2000);
        updateStats();
    });
});

function loadFlag() {
    const flagElement = document.getElementById("flag");
    flagElement.src = flags[currentFlagIndex].flag;
}

function nextFlag() {
    currentFlagIndex = Math.floor(Math.random() * flags.length);
    loadFlag();
}

function updateStats() {
    document.getElementById("current-streak").textContent = currentStreak;
    document.getElementById("highest-streak").textContent = highestStreak;
    document.getElementById("total-attempts").textContent = totalAttempts;
    const winRate = totalAttempts > 0 ? ((wins / totalAttempts) * 100).toFixed(2) : 0;
    document.getElementById("win-rate").textContent = winRate;
}

function setupDarkModeToggle() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}