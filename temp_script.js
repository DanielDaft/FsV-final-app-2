// Demo-Daten - MIT DANIEL DAFT DATEN - OPTIMIERT FÜR 2025
const DEMO_STUDENTS = [
  {
    id: 'daniel-daft-001',
    name: 'Daniel',
    surname: 'Daft',
    date_of_birth: '1995-07-12',
    address: 'Friedrich-Engels-Str. 2',
    postal_code: '10785',
    city: 'Berlin',
    phone: '01713071787',
    start_date: '2025-09-04',
    theory_exam_date: '2025-10-10',
    practical_exam_date: '2025-10-25',
    theory_exam_passed: true,
    practical_exam_passed: true,
    wears_glasses: false,
    ueberlandfahrten: [0,0,0,0,0], // 0-4 Füllstände statt boolean
    autobahnfahrten: [0,0,0,0], // 0-4 Füllstände statt boolean
    nachtfahrten: [0,0,0], // 0-4 Füllstände statt boolean
    uebungsfahrten_ganz: [false,false,false,false,false,false,false,false],
    uebungsfahrten_halb: [false,false,false,false,false],
    created_at: '2025-09-04T10:00:00Z',
    updated_at: new Date().toISOString()
  }
];

// Training Categories (VOLLSTÄNDIG aus Backend)
const TRAINING_CATEGORIES = {
  "grundstufe": {
    "name": "Grundstufe",
    "subtitle": "Einweisung und Bedienung",
    "color": "#F59E0B",
    "sections": {
      "besonderheiten_einsteigen": {
        "name": "Besonderheiten beim Einsteigen",
        "items": ["Besonderheiten beim Einsteigen"]
      },
      "einstellen": {
        "name": "Einstellen",
        "items": ["Sitz", "Spiegel", "Lenkrad", "Kopfstütze"]
      },
      "lenkradhaltung": {
        "name": "Lenkradhaltung",
        "items": ["Lenkradhaltung"]
      },
      "pedale": {
        "name": "Pedale",
        "items": ["Pedale"]
      },
      "gurt_anlegen": {
        "name": "Gurt anlegen/anpassen",
        "items": ["Gurt anlegen/anpassen"]
      },
      "schalt_wahlhebel": {
        "name": "Schalt-/Wählhebel",
        "items": ["Schalt-/Wählhebel"]
      },
      "zundschloss": {
        "name": "Zündschloss",
        "items": ["Zündschloss"]
      },
      "motor_anlassen": {
        "name": "Motor anlassen",
        "items": ["Motor anlassen"]
      },
      "anfahren": {
        "name": "Anfahren/Anhalteübungen",
        "items": ["Anfahren/Anhalteübungen"]
      },
      "schaltubungen": {
        "name": "Schaltübungen (umweltschonend)",
        "items": ["hoch: 1-2", "2-3", "3-4", "...", "runter: 4-3", "3-2", "2-1", "...", "runter: 4-2", "4-1", "3-1"]
      },
      "lenkubungen": {
        "name": "Lenkübungen",
        "items": ["Lenkübungen"]
      }
    }
  },
  "aufbaustufe": {
    "name": "Aufbaustufe",
    "subtitle": "Umweltschonendes, vorausschauendes Fahren, Blickschulung",
    "color": "#F97316",
    "sections": {
      "rollen_schalten": {
        "name": "Rollen und Schalten",
        "items": ["Rollen und Schalten"]
      },
      "abbremsen_schalten": {
        "name": "Abbremsen und Schalten",
        "items": ["Abbremsen und Schalten"]
      },
      "bremsubungen": {
        "name": "Bremsübungen",
        "items": ["degressiv", "Zielbremsungen", "Gefahrsituationen"]
      },
      "gefalle": {
        "name": "Gefälle",
        "items": ["Anhalten", "Anfahren", "Rückwärts", "Sichern", "Schalten"]
      },
      "steigung": {
        "name": "Steigung",
        "items": ["Anhalten", "Anfahren", "Rückwärts", "Sichern", "Schalten"]
      },
      "tastgeschwindigkeit": {
        "name": "Tastgeschwindigkeit",
        "items": ["Tastgeschwindigkeit"]
      },
      "bedienungs_kontrolleinrichtungen": {
        "name": "Bedienungs- und Kontrolleinrichtungen",
        "items": ["Bedienungs- und Kontrolleinrichtungen"]
      },
      "ortliche_besonderheiten": {
        "name": "Örtliche Besonderheiten",
        "items": ["Örtliche Besonderheiten"]
      }
    }
  },
  "leistungsstufe": {
    "name": "Leistungsstufe",
    "subtitle": "Schwierige Verkehrssituationen, umweltschonendes, vorausschauendes Fahren, Blickschulung/Bremsbereitschaft",
    "color": "#EF4444",
    "sections": {
      "fahrbahnabutzung": {
        "name": "Fahrbahnbenutzung",
        "items": ["Einordnen", "Markierungen"]
      },
      "fahrstreifenwechsel": {
        "name": "Fahrstreifenwechsel",
        "items": ["links", "rechts"]
      },
      "vorbeifahren": {
        "name": "Vorbeifahren/Überholen",
        "items": ["Vorbeifahren/Überholen"]
      },
      "abbiegen": {
        "name": "Abbiegen",
        "items": ["rechts", "links", "mehrspurig", "Radweg", "Sonderstreifen", "Straßenbahnen", "Einbahnstraßen"]
      },
      "vorfahrt": {
        "name": "Vorfahrt",
        "items": ["rechts vor links", "Grünpfeil", "Polizeibeamte", "Grünpfeil-Schild"]
      },
      "geschwindigkeit_abstand": {
        "name": "Geschwindigkeit/Abstand",
        "items": ["Geschwindigkeit/Abstand"]
      },
      "situationen_verkehrsteilnehmer": {
        "name": "Situationen mit anderen Verkehrsteilnehmern",
        "items": ["Fußgängerüberwege", "Kinder", "Öffentl. Verkehrsmittel", "Schulbus", "Ältere/Behinderte", "Radfahrer/Mofa", "Einbahnstr./Radfahrer", "Verk.-beruh. Bereich"]
      },
      "schwierige_verkehrsfuhrung": {
        "name": "Schwierige Verkehrsführung",
        "items": ["Schwierige Verkehrsführung"]
      },
      "engpass": {
        "name": "Engpass",
        "items": ["Engpass"]
      },
      "kreisverkehr": {
        "name": "Kreisverkehr",
        "items": ["Kreisverkehr"]
      },
      "bahnubergang": {
        "name": "Bahnübergang (warten)",
        "items": ["Bahnübergang (warten)"]
      },
      "kritische_verkehrssituationen": {
        "name": "Kritische Verkehrssituationen",
        "items": ["Hauptverkehrszeiten", "Partnerschaftliches Verhalten (Kommunikation, Verzicht auf Vorfahrt)", "Schwung nutzen"]
      },
      "fussganger_schutzbereich": {
        "name": "Fußgänger Schutzbereich",
        "items": ["Fußgänger Schutzbereich"]
      }
    }
  },
  "grundfahraufgaben": {
    "name": "Grundfahraufgaben",
    "color": "#F59E0B",
    "sections": {
      "ruckwartsfahren": {
        "name": "Rückwärtsfahren",
        "items": ["Rückwärtsfahren"]
      },
      "umkehren": {
        "name": "Umkehren",
        "items": ["Umkehren"]
      },
      "gefahrbremsung": {
        "name": "Gefahrbremsung",
        "items": ["Gefahrbremsung"]
      },
      "einparken_langs": {
        "name": "Einparken längs",
        "items": ["vorwärts rechts", "vorwärts links", "rückwärts rechts", "rückwärts links"]
      },
      "einparken_quer": {
        "name": "Einparken quer",
        "items": ["vorwärts rechts", "vorwärts links", "rückwärts rechts", "rückwärts links"]
      }
    }
  },
  "uberlandfahrten": {
    "name": "Überlandfahrten",
    "subtitle": "Sicheres und umweltschonendes Fahren außerhalb geschlossener Ortschaften",
    "color": "#EAB308",
    "sections": {
      "fahren_landstrasse": {
        "name": "Fahren auf Landstraßen",
        "items": ["Geschwindigkeitsanpassung", "Überholvorgänge", "Kurvenfahrt", "Sichtfahrgebot"]
      },
      "uberholen_landstrasse": {
        "name": "Überholen auf Landstraßen",
        "items": ["Überholvorgang einleiten", "Sicherheitsabstand", "Einscheren", "Verkehrsbeobachtung"]
      }
    }
  },
  "autobahn": {
    "name": "Autobahnfahrten",
    "subtitle": "Sicheres Fahren auf Autobahnen und Kraftfahrstraßen",
    "color": "#EAB308",
    "sections": {
      "auffahren_autobahn": {
        "name": "Auffahren auf die Autobahn",
        "items": ["Beschleunigungsstreifen", "Einfädeln", "Spurwechsel"]
      },
      "fahren_autobahn": {
        "name": "Fahren auf der Autobahn",
        "items": ["Geschwindigkeitsanpassung", "Sicherheitsabstand", "Spurhaltung", "Überholen"]
      },
      "verlassen_autobahn": {
        "name": "Verlassen der Autobahn",
        "items": ["Verzögerungsstreifen", "Geschwindigkeitsreduzierung", "Ausfahrt"]
      }
    }
  },
  "dammerung_dunkelheit": {
    "name": "Dämmerung/Dunkelheit",
    "subtitle": "Fahren bei schlechten Sichtverhältnissen",
    "color": "#EAB308",
    "sections": {
      "beleuchtung": {
        "name": "Beleuchtungseinrichtungen",
        "items": ["Abblendlicht", "Fernlicht", "Nebelscheinwerfer", "Standlicht"]
      },
      "sichtverhaltnisse": {
        "name": "Schlechte Sichtverhältnisse",
        "items": ["Angepasste Geschwindigkeit", "Vergrößerter Sicherheitsabstand", "Verkehrsbeobachtung"]
      }
    }
  },
  "reife_teststufe": {
    "name": "Reife- und Teststufe",
    "subtitle": "Vorbereitung auf die praktische Prüfung",
    "color": "#22C55E",
    "sections": {
      "prufungsvorbereitung": {
        "name": "Prüfungsvorbereitung",
        "items": ["Selbstständiges Fahren", "Prüfungsangst bewältigen", "Verkehrsregeln anwenden"]
      },
      "fehleranalyse": {
        "name": "Fehleranalyse",
        "items": ["Häufige Fehler", "Korrekturen", "Verbesserung der Fahrweise"]
      }
    }
  },
  "situative_bausteine": {
    "name": "Situative Bausteine",
    "subtitle": "Spezielle Verkehrssituationen meistern",
    "color": "#60A5FA",
    "sections": {
      "verkehrssituationen": {
        "name": "Besondere Verkehrssituationen",
        "items": ["Baustellen", "Schulwege", "Krankenhaus-/Feuerwehrzufahrten"]
      },
      "notfallsituationen": {
        "name": "Notfallsituationen",
        "items": ["Panne", "Unfall", "Erste Hilfe", "Warndreieck aufstellen"]
      }
    }
  },
  "fahrerassistenzsysteme": {
    "name": "Fahrerassistenzsysteme",
    "subtitle": "Moderne Assistenzsysteme verstehen und nutzen",
    "color": "#60A5FA",
    "sections": {
      "assistenzsysteme": {
        "name": "Elektronische Helfer",
        "items": ["ABS", "ESP", "Einparkhilfe", "Navigationsgerät", "Tempomat", "Abstandsregeltempomat"]
      }
    }
  },
  "beim_fahrer": {
    "name": "Beim Fahrer",
    "subtitle": "Richtige Sitzposition und Fahrzeugbedienung",
    "color": "#60A5FA",
    "sections": {
      "sitzeinstellung": {
        "name": "Sitzeinstellung",
        "items": ["Sitzhöhe", "Sitzabstand", "Rückenlehne", "Kopfstütze"]
      },
      "fahrzeugbedienung": {
        "name": "Fahrzeugbedienung",
        "items": ["Lenkradhaltung", "Pedalstellung", "Schaltung", "Handbremse"]
      }
    }
  },
  "heizung_luftung": {
    "name": "Heizung und Lüftung",
    "subtitle": "Klimatechnik im Fahrzeug",
    "color": "#60A5FA",
    "sections": {
      "klimatechnik": {
        "name": "Heizung/Klimaanlage",
        "items": ["Heizung einstellen", "Klimaanlage bedienen", "Gebläse", "Entfrostung"]
      }
    }
  },
  "betriebs_verkehrssicherheit": {
    "name": "Betriebs- und Verkehrssicherheit",
    "subtitle": "Technische Überprüfungen des Fahrzeugs",
    "color": "#60A5FA",
    "sections": {
      "fahrzeugkontrolle": {
        "name": "Fahrzeugkontrolle",
        "items": ["Beleuchtung prüfen", "Reifen kontrollieren", "Flüssigkeitsstände", "Bremsen testen"]
      },
      "verkehrssicherheit": {
        "name": "Verkehrssicherheit",
        "items": ["Ladungssicherung", "Kindersitze", "Sicherheitsgurte"]
      }
    }
  },
  "witterung": {
    "name": "Witterung",
    "subtitle": "Fahren bei verschiedenen Wetterbedingungen",
    "color": "#60A5FA",
    "sections": {
      "schlechtwetter": {
        "name": "Schwierige Wetterverhältnisse",
        "items": ["Regen", "Schnee/Eis", "Nebel", "Wind", "Aquaplaning"]
      },
      "angepasstes_fahren": {
        "name": "Angepasste Fahrweise",
        "items": ["Geschwindigkeit reduzieren", "Sicherheitsabstand vergrößern", "Sanft bremsen", "Reifen wechseln"]
      }
    }
  }
};

// Storage Manager - OHNE BACKEND
const StorageManager = {
  getStudents() {
    const stored = localStorage.getItem('fahrschul_students_professional');
    return stored ? JSON.parse(stored) : [];
  },

  saveStudents(students) {
    localStorage.setItem('fahrschul_students_professional', JSON.stringify(students));
  },

  getStudentById(id) {
    const students = this.getStudents();
    return students.find(s => s.id === id);
  },

  updateStudent(updatedStudent) {
    const students = this.getStudents();
    const index = students.findIndex(s => s.id === updatedStudent.id);
    if (index !== -1) {
      students[index] = { ...updatedStudent, updated_at: new Date().toISOString() };
      this.saveStudents(students);
    }
  },

  deleteStudent(id) {
    const students = this.getStudents();
    const filtered = students.filter(s => s.id !== id);
    this.saveStudents(filtered);
  },

  getProgressForStudent(studentId) {
    const stored = localStorage.getItem('fahrschul_progress_professional');
    const allProgress = stored ? JSON.parse(stored) : {};
    return allProgress[studentId] || {};
  },

  saveProgressForStudent(studentId, progress) {
    const stored = localStorage.getItem('fahrschul_progress_professional');
    const allProgress = stored ? JSON.parse(stored) : {};
    allProgress[studentId] = progress;
    localStorage.setItem('fahrschul_progress_professional', JSON.stringify(allProgress));
  },

  initDemoData() {
    const existing = this.getStudents();
    if (existing.length === 0) {
      this.saveStudents(DEMO_STUDENTS);
    }
  }
};

// Helper Functions
function formatGermanDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE');
}

function calculateOverallProgress(student) {
  let totalItems = 0;
  let completedItems = 0;

  Object.keys(TRAINING_CATEGORIES).forEach(categoryKey => {
    const category = TRAINING_CATEGORIES[categoryKey];
    totalItems += countTotalItems(category.sections);
  });

  const progress = StorageManager.getProgressForStudent(student.id);
  
  Object.keys(TRAINING_CATEGORIES).forEach(categoryKey => {
    const category = TRAINING_CATEGORIES[categoryKey];
    const categoryProgress = progress[categoryKey] || {};

    function countCompletedItems(sections) {
      Object.entries(sections).forEach(([sectionKey, section]) => {
        if (section.sections) {
          countCompletedItems(section.sections);
        } else if (section.items) {
          section.items.forEach(item => {
            const status = categoryProgress[sectionKey] && categoryProgress[sectionKey][item];
            if (status && status !== 'not_started') {
              completedItems++;
            }
          });
        }
      });
    }

    countCompletedItems(category.sections);
  });

  return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
}

// Gesamtanzahl Items rekursiv zählen
function countTotalItems(sections) {
  let total = 0;
  Object.values(sections).forEach(section => {
    if (section.sections) {
      total += countTotalItems(section.sections);
    } else if (section.items) {
      total += section.items.length;
    }
  });
  return total;
}

// App State
let currentView = 'list';
let selectedStudent = null;

// Render Functions
function renderStudentList() {
  const students = StorageManager.getStudents();
  
  let html = `
    <div class="main-header">
      <h1>FsV</h1>
      <button class="btn-primary" onclick="showNewStudentDialog()">
        <span>+</span> Neuer Schüler
      </button>
    </div>
    <div class="container">
      <div class="student-grid">
  `;

  students.forEach(student => {
    const progress = calculateOverallProgress(student);
    const totalItems = Object.values(TRAINING_CATEGORIES).reduce((sum, cat) => sum + countTotalItems(cat.sections), 0);
    const completedItems = Math.round((progress / 100) * totalItems);

    html += `
      <div class="student-card" onclick="openStudentDetail('${student.id}')">
        <button class="delete-btn" onclick="event.stopPropagation(); deleteStudent('${student.id}')" title="Schüler löschen">
          🗑️
        </button>
        <div class="student-info">
          <div class="student-avatar">👤</div>
          <div class="student-details">
            <div class="student-name">${student.name} ${student.surname}</div>
            ${student.phone ? `<div class="student-phone">📞 ${student.phone}</div>` : ''}
            <div class="student-date">Seit ${formatGermanDate(student.start_date)}</div>
          </div>
        </div>
        <div class="student-progress">${progress}% (${completedItems}/${totalItems})</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  document.getElementById('main-content').innerHTML = html;
  currentView = 'list';
}

function renderStudentDetail(studentId) {
  const student = StorageManager.getStudentById(studentId);
  if (!student) {
    renderStudentList();
    return;
  }

  selectedStudent = student;

  let html = `
    <div class="detail-header">
      <button class="back-btn" onclick="renderStudentList()">←</button>
      <div class="detail-title">${student.name} ${student.surname}</div>
      <button class="btn-primary" onclick="exportToPDF('${student.id}')" style="margin-right: 8px;">📄 PDF exportieren</button>
      <button class="edit-btn" onclick="showEditStudentDialog('${student.id}')" title="Bearbeiten">✏️</button>
    </div>
    <div class="container">
      ${renderPersonalInfo(student)}
      ${renderFahrtenSection(student)}
      ${renderTrainingProgress(student)}
    </div>
  `;

  document.getElementById('main-content').innerHTML = html;
  currentView = 'detail';
}

function renderPersonalInfo(student) {
  const comments = getCommentsForStudent(student.id);
  const hasStudentComment = comments['student_general'] && comments['student_general'].trim();

  return `
    <div class="section">
      <div class="section-header">
        <div class="section-icon">👤</div>
        <div class="section-title">Schülerinformationen</div>
        <button class="comment-btn ${hasStudentComment ? 'has-comment' : ''}" onclick="showStudentCommentDialog('${student.id}')" title="${hasStudentComment ? 'Notizen bearbeiten' : 'Notizen hinzufügen'}">
          💬
        </button>
      </div>
      <div class="info-grid">
        ${student.phone ? `<div class="info-item">
          <div class="info-icon">📞</div>
          <div class="info-text">Telefon: ${student.phone}</div>
        </div>` : ''}
        
        ${student.address ? `<div class="info-item">
          <div class="info-icon">📍</div>
          <div class="info-text">Adresse: ${student.address}${student.postal_code ? `, ${student.postal_code}` : ''}${student.city ? ` ${student.city}` : ''}</div>
        </div>` : ''}
        
        ${student.date_of_birth ? `<div class="info-item">
          <div class="info-icon">🎂</div>
          <div class="info-text">Geburtsdatum: ${formatGermanDate(student.date_of_birth)}</div>
        </div>` : ''}
        
        <div class="info-item">
          <div class="info-icon">📅</div>
          <div class="info-text">Ausbildungsbeginn: ${formatGermanDate(student.start_date)}</div>
        </div>
        
        ${student.wears_glasses !== null ? `<div class="info-item">
          <div class="info-icon">👓</div>
          <div class="info-text">${student.wears_glasses ? 'Brillenträger' : 'Kein Brillenträger'}</div>
        </div>` : ''}
        
        ${student.theory_exam_date ? `<div class="info-item">
          <div class="info-icon">📝</div>
          <div class="info-text">Theorieprüfung: ${formatGermanDate(student.theory_exam_date)}${student.theory_exam_passed ? ' <span style="color: #22c55e; font-weight: 600;">✅ Bestanden</span>' : ''}</div>
        </div>` : (student.theory_exam_passed ? `<div class="info-item">
          <div class="info-icon">📝</div>
          <div class="info-text">Theorieprüfung: <span style="color: #22c55e; font-weight: 600;">✅ Bestanden</span></div>
        </div>` : '')}
        
        ${student.practical_exam_date ? `<div class="info-item">
          <div class="info-icon">🚗</div>
          <div class="info-text">Praktische Prüfung: ${formatGermanDate(student.practical_exam_date)}${student.practical_exam_passed ? ' <span style="color: #22c55e; font-weight: 600;">✅ Bestanden</span>' : ''}</div>
        </div>` : (student.practical_exam_passed ? `<div class="info-item">
          <div class="info-icon">🚗</div>
          <div class="info-text">Praktische Prüfung: <span style="color: #22c55e; font-weight: 600;">✅ Bestanden</span></div>
        </div>` : '')}
      </div>
    </div>
  `;
}

function renderFahrtenSection(student) {
  return `
    <div class="section">
      <div class="section-header">
        <div class="section-icon">🚗</div>
        <div class="section-title">Geleistete Fahrten</div>
      </div>
      ${renderGesamtFortschritt(student.id)}
    </div>
  `;
}

// DYNAMISCHE GESAMTÜBERSICHT ALLER FORTSCHRITTE
function renderGesamtFortschritt(studentId) {
  const progress = StorageManager.getProgressForStudent(studentId);
  
  // Sammle alle UE-Kreise aus allen Kategorien
  let totalUECircles = 0;
  const allCategories = ['grundstufe', 'aufbaustufe', 'leistungsstufe', 'grundfahraufgaben', 'uberlandfahrten', 'autobahn', 'dammerung_dunkelheit'];
  
  allCategories.forEach(categoryKey => {
    const ueCircles = progress[`${categoryKey}_header_ue`] || [];
    totalUECircles += ueCircles.length;
  });
  
  // Sammle alle Viertel-Kreise aus allen Kategorien und rechne sie korrekt um (15min = 0.333 UE)
  let totalQuarterUE = 0; // Als Dezimalzahl (z.B. 1.75 UE)
  allCategories.forEach(categoryKey => {
    const quarterCircles = progress[`${categoryKey}_header_quarters`] || [];
    quarterCircles.forEach(fillLevel => {
      // fillLevel: 0=0%, 1=25%=15min, 2=50%=30min, 3=75%=45min, 4=100%=60min
      // 15min = 15/45 = 0.333 UE
      totalQuarterUE += fillLevel * (15/45); // 15min pro Schritt ÷ 45min pro UE
    });
  });
  
  // Sammle alle blauen PS-Kreise (nur aus Fahrten-Kategorien)
  let totalBlueCircles = 0;
  const fahrtenCategories = ['uberlandfahrten', 'autobahn', 'dammerung_dunkelheit'];
  
  fahrtenCategories.forEach(categoryKey => {
    const blueCircles = progress[`${categoryKey}_blue_circles`] || [];
    totalBlueCircles += blueCircles.filter(circle => circle === true).length;
  });
  
  return `
    <div style="padding: 20px;">
      <!-- Erste Reihe: Grüne UE-Kreise (Gesamtanzahl) -->
      <div class="fahrt-section">
        <div class="fahrt-title">Gesamt UE-Kreise: ${totalUECircles}</div>
        <div class="fahrt-buttons">
          ${Array(totalUECircles).fill(0).map((_, index) => `
            <div class="ue-circle" style="background: #22c55e; border-color: #22c55e; color: white;" title="UE ${index + 1}">
              ${index + 1}
            </div>
          `).join('')}
          <span style="margin-left: 8px; color: #22c55e; font-weight: 600; font-size: 14px;">UE</span>
        </div>
      </div>
      
      <!-- Zweite Reihe: Viertel-Kreise (mit korrekter UE-Berechnung) -->
      <div class="fahrt-section">
        <div class="fahrt-title">Gesamt Viertel-UE: ${totalQuarterUE.toFixed(2).replace('.00', '')}</div>
        <div class="fahrt-buttons">
          ${allCategories.map(categoryKey => {
            const quarterCircles = progress[`${categoryKey}_header_quarters`] || [];
            return quarterCircles.map((fillLevel, index) => `
              <div class="quarter-circle ${getFillLevelClass(fillLevel)}" title="${categoryKey} Viertel ${index + 1} - ${fillLevel * 15}min = ${(fillLevel * (15/45)).toFixed(2)} UE"></div>
            `).join('');
          }).join('')}
          ${totalQuarterUE > 0 ? '<span style="margin-left: 8px; color: #22c55e; font-weight: 600; font-size: 14px;">UE</span>' : ''}
        </div>
      </div>
      
      <!-- Dritte Reihe: Blaue PS-Kreise (nur gefüllte) -->
      <div class="fahrt-section">
        <div class="fahrt-title">Gesamt PS-Fahrten: ${totalBlueCircles}</div>
        <div class="fahrt-buttons">
          ${Array(totalBlueCircles).fill(0).map((_, index) => `
            <div class="ue-circle blue-filled" title="PS-Fahrt ${index + 1}">
              ${index + 1}
            </div>
          `).join('')}
          ${totalBlueCircles > 0 ? '<span style="margin-left: 8px; color: #3b82f6; font-weight: 600; font-size: 14px;">PS</span>' : ''}
        </div>
      </div>
    </div>
  `;
}

// NEUE FUNKTION: Pflichtfahrten als Kreise mit Füllständen
function renderPflichtfahrtenWithCircles(student, title, category, maxCount) {
  const fahrten = student[category] || [];
  
  // Erweitere Array auf maxCount mit Füllständen (0-4)
  const fahrtStands = [];
  for (let i = 0; i < maxCount; i++) {
    fahrtStands[i] = fahrten[i] || 0; // 0 = leer, 1-4 = 25%-100%
  }

  const completedFull = fahrtStands.filter(stand => stand >= 4).length;

  let html = `
    <div class="fahrt-section">
      <div class="fahrt-title">${title}</div>
      <div class="fahrt-buttons" id="buttons-${category}">
  `;

  fahrtStands.forEach((fillLevel, index) => {
    const fillClass = getFillClass(fillLevel);
    html += `
      <button class="circle-btn ${fillClass}" 
              onclick="toggleCircleFill('${student.id}', '${category}', ${index})"
              data-category="${category}" data-index="${index}" title="Fahrt ${index + 1}">
      </button>
    `;
  });

  html += `
        <span class="fahrt-status">(${completedFull}/${maxCount})</span>
      </div>
    </div>
  `;

  return html;
}

function getFillClass(fillLevel) {
  switch (fillLevel) {
    case 0: return 'fill-0';
    case 1: return 'fill-25';
    case 2: return 'fill-50';
    case 3: return 'fill-75';
    case 4: return 'fill-100';
    default: return 'fill-0';
  }
}

function renderFahrtType(student, title, category, maxCount, canAddRemove) {
  const fahrten = student[category] || [];
  const completed = fahrten.filter(Boolean).length;
  const total = fahrten.length;
  const statusText = maxCount ? `(${completed}/${maxCount})` : `(${completed}/${total})`;

  let html = `
    <div class="fahrt-section">
      <div class="fahrt-title">${title}</div>
      <div class="fahrt-buttons" id="buttons-${category}">
  `;

  fahrten.forEach((completed, index) => {
    html += `
      <button class="fahrt-btn ${completed ? 'completed' : 'incomplete'}"
              onclick="toggleFahrt('${student.id}', '${category}', ${index})"
              data-category="${category}" data-index="${index}">
        ${index + 1}  
      </button>
    `;
  });

  if (canAddRemove) {
    const addButtonClass = category === 'uebungsfahrten_halb' ? 'fahrt-btn add-green' : 'fahrt-btn add';
    html += `
      <button class="${addButtonClass}" onclick="addFahrt('${student.id}', '${category}')">
        +
      </button>
    `;
  }

  html += `
        <span class="fahrt-status">${statusText}</span>
      </div>
    </div>
  `;

  return html;
}

function renderTrainingProgress(student) {
  let html = `
    <div class="section">
      <div class="section-header">
        <div class="section-icon">📋</div>
        <div class="section-title">Ausbildungsfortschritt</div>
      </div>
    </div>
  `;

  Object.entries(TRAINING_CATEGORIES).forEach(([key, category]) => {
    const progress = StorageManager.getProgressForStudent(student.id);
    const categoryProgress = progress[key] || {};
    
    let completedItems = 0;
    const totalItems = countTotalItems(category.sections);

    function countCompletedItems(sections) {
      Object.entries(sections).forEach(([sectionKey, section]) => {
        if (section.sections) {
          countCompletedItems(section.sections);
        } else if (section.items) {
          section.items.forEach(item => {
            const status = categoryProgress[sectionKey] && categoryProgress[sectionKey][item];
            if (status && status !== 'not_started') {
              completedItems++;
            }
          });
        }
      });
    }

    countCompletedItems(category.sections);

    const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    const expanded = key === 'grundstufe';

    html += `
      <div class="training-section">
        <div class="training-header ${key}" onclick="toggleTrainingSection('${key}')">
          ${(key === 'grundstufe' || key === 'aufbaustufe' || key === 'leistungsstufe' || key === 'grundfahraufgaben') ? renderCategoryHeaderWithCircles(student.id, category, key, percentage, completedItems, totalItems) : 
            (key === 'uberlandfahrten') ? renderSpecialFahrtenHeader(student.id, category, key, percentage, completedItems, totalItems, 5) :
            (key === 'autobahn') ? renderSpecialFahrtenHeader(student.id, category, key, percentage, completedItems, totalItems, 4) :
            (key === 'dammerung_dunkelheit') ? renderSpecialFahrtenHeader(student.id, category, key, percentage, completedItems, totalItems, 3) : `
            <div class="training-header-content">
              <div class="training-info">
                <h3>${category.name}</h3>
                ${category.subtitle ? `<div class="training-subtitle">${category.subtitle}</div>` : ''}
              </div>
              <div class="training-progress">
                <div class="progress-circle"></div>
                <div class="progress-text">${percentage}%</div>
                <div class="progress-count">(${completedItems}/${totalItems})</div>
                <div class="dropdown-arrow">▼</div>
              </div>
            </div>
          `}
        </div>
        <div id="section-${key}" class="training-content ${expanded ? 'expanded' : ''}">
          <div class="training-items">
            ${renderTrainingItems(category.sections, key, student.id)}
          </div>
        </div>
      </div>
    `;
  });

  return html;
}

function renderTrainingItems(sections, categoryKey, studentId) {
  const progress = StorageManager.getProgressForStudent(studentId);
  const categoryProgress = progress[categoryKey] || {};
  const comments = getCommentsForStudent(studentId);

  function renderSection(sections, level = 0) {
    return Object.entries(sections).map(([sectionKey, section]) => {
      if (section.sections) {
        return `
          <div class="mb-4 ${level > 0 ? 'ml-4' : ''}">
            ${section.name ? `<h4 class="font-medium text-gray-700 mb-2">${section.name}</h4>` : ''}
            ${renderSection(section.sections, level + 1)}
          </div>
        `;
      } else if (section.items) {
        const sectionProgress = categoryProgress[sectionKey] || {};

        return `
          <div class="mb-4 ${level > 0 ? 'ml-4' : ''}">
            ${section.name ? `<h4 class="font-medium text-gray-700 mb-2">${section.name}</h4>` : ''}
            ${section.items.map(item => {
              const status = sectionProgress[item] || 'not_started';
              const symbol = getStatusSymbol(status);
              const statusClass = status !== 'not_started' ? status : '';
              const commentKey = `${categoryKey}_${sectionKey}_${item}`;
              const hasComment = comments[commentKey] && comments[commentKey].trim();

              // NORMALE CHECKBOXEN FÜR ALLE KATEGORIEN (AUCH GRUNDSTUFE)
              return `
                <div class="progress-item">
                  <div class="progress-checkbox ${statusClass}" 
                       onclick="toggleProgressItem('${studentId}', '${categoryKey}', '${sectionKey}', '${item}', event)"
                       data-category="${categoryKey}" data-item="${item}">
                    ${symbol}
                  </div>
                  <span class="progress-item-text">${item}</span>
                  <button class="comment-btn ${hasComment ? 'has-comment' : ''}" onclick="showCommentDialog('${studentId}', '${categoryKey}', '${sectionKey}', '${item}', event)" title="${hasComment ? 'Kommentar bearbeiten' : 'Kommentar hinzufügen'}">
                    💬
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }
      
      return '';
    }).join('');
  }

  return renderSection(sections);
}

// SPEZIAL-RENDERING FÜR GRUNDSTUFE MIT UE-KREISEN
function renderGrundstufeItem(studentId, sectionKey, item, hasComment) {
  const progress = StorageManager.getProgressForStudent(studentId);
  const ueProgress = progress.grundstufe_ue || {};
  const quarterProgress = progress.grundstufe_quarters || {};
  
  const ueKey = `${sectionKey}_${item}`;
  const currentUE = ueProgress[ueKey] || 0; // Anzahl volle UE-Kreise
  const quarters = quarterProgress[ueKey] || [false, false, false, false]; // 4 Viertel-Kreise

  return `
    <div class="ue-section">
      <div class="ue-title">${item}</div>
      <div style="display: flex; gap: 8px; align-items: center;">
        <div class="ue-circles">
          ${renderUECircles(studentId, ueKey, currentUE)}
          <button class="circle-btn green fill-0" onclick="addUECircle('${studentId}', '${ueKey}')" title="UE hinzufügen">+</button>
        </div>
        <div class="quarter-circles">
          ${quarters.map((filled, qIndex) => `
            <div class="quarter-circle ${getQuarterFillClass(quarters, qIndex)}" 
                 onclick="toggleQuarterCircle('${studentId}', '${ueKey}', ${qIndex})"
                 title="Viertel ${qIndex + 1}"></div>
          `).join('')}
        </div>
        <button class="comment-btn ${hasComment ? 'has-comment' : ''}" onclick="showCommentDialog('${studentId}', 'grundstufe', '${sectionKey}', '${item}', event)" title="Kommentar">💬</button>
      </div>
    </div>
  `;
}

function getQuarterFillClass(quarters, index) {
  const filledCount = quarters.slice(0, index + 1).filter(q => q).length;
  if (!quarters[index]) return '';

  switch (filledCount) {
    case 1: return 'fill-25';
    case 2: return 'fill-50';
    case 3: return 'fill-75';
    case 4: return 'fill-100';
    default: return 'filled';
  }
}

function renderUECircles(studentId, ueKey, count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<button class="circle-btn green fill-100" onclick="removeUECircle('${studentId}', '${ueKey}', ${i})" title="UE ${i + 1} - Klick zum Entfernen"></button>`;
  }
  return html;
}

// NEUE FUNKTIONEN FÜR KREIS-SYSTEM

// Pflichtfahrten-Kreise togglen (0-4 Füllstände)
function toggleCircleFill(studentId, category, index) {
  const student = StorageManager.getStudentById(studentId);
  if (!student) return;

  // Stelle sicher, dass fahrten als Array von Zahlen (0-4) existiert
  let updatedFahrten = [...(student[category] || [])];
  
  // Erweitere Array falls nötig
  while (updatedFahrten.length <= index) {
    updatedFahrten.push(0);
  }

  // Zyklisch durch Füllstände: 0 -> 1 -> 2 -> 3 -> 4 -> 0
  updatedFahrten[index] = (updatedFahrten[index] + 1) % 5;

  const updatedStudent = {
    ...student,
    [category]: updatedFahrten
  };

  StorageManager.updateStudent(updatedStudent);

  // Nur den geklickten Button aktualisieren
  const button = document.querySelector(`button[data-category="${category}"][data-index="${index}"]`);
  if (button) {
    const newFillClass = getFillClass(updatedFahrten[index]);
    button.className = `circle-btn ${newFillClass}`;
  }

  // Status Text aktualisieren
  const statusSpan = document.querySelector(`#buttons-${category} .fahrt-status`);
  if (statusSpan) {
    const completedFull = updatedFahrten.filter(level => level >= 4).length;
    const maxCount = category === 'ueberlandfahrten' ? 5 : category === 'autobahnfahrten' ? 4 : 3;
    statusSpan.textContent = `(${completedFull}/${maxCount})`;
  }
}

// UE-Kreis hinzufügen (Grundstufe)
function addUECircle(studentId, ueKey) {
  const progress = StorageManager.getProgressForStudent(studentId);
  if (!progress.grundstufe_ue) progress.grundstufe_ue = {};
  
  progress.grundstufe_ue[ueKey] = (progress.grundstufe_ue[ueKey] || 0) + 1;
  
  StorageManager.saveProgressForStudent(studentId, progress);
  
  // Grundstufe-Bereich neu rendern
  renderStudentDetail(studentId);
}

// UE-Kreis entfernen (Grundstufe)
function removeUECircle(studentId, ueKey, index) {
  const progress = StorageManager.getProgressForStudent(studentId);  
  if (!progress.grundstufe_ue) progress.grundstufe_ue = {};
  
  if (progress.grundstufe_ue[ueKey] > 0) {
    progress.grundstufe_ue[ueKey]--;
    if (progress.grundstufe_ue[ueKey] === 0) {
      delete progress.grundstufe_ue[ueKey];
    }
  }
  
  StorageManager.saveProgressForStudent(studentId, progress);
  
  // Grundstufe-Bereich neu rendern
  renderStudentDetail(studentId);
}

// Viertel-Kreis togglen (Grundstufe)
function toggleQuarterCircle(studentId, ueKey, quarterIndex) {
  const progress = StorageManager.getProgressForStudent(studentId);
  if (!progress.grundstufe_quarters) progress.grundstufe_quarters = {};
  if (!progress.grundstufe_quarters[ueKey]) progress.grundstufe_quarters[ueKey] = [false, false, false, false];
  
  progress.grundstufe_quarters[ueKey][quarterIndex] = !progress.grundstufe_quarters[ueKey][quarterIndex];
  
  StorageManager.saveProgressForStudent(studentId, progress);
  
  // Nur das angeklickte Viertel aktualisieren
  const quarterElement = event.target;
  if (progress.grundstufe_quarters[ueKey][quarterIndex]) {
    quarterElement.classList.add('filled');
  } else {
    quarterElement.classList.remove('filled');
  }
}

function getStatusSymbol(status) {
  switch (status) {
    case 'once': return '/';
    case 'twice': return '×';
    case 'thrice': return '⊗';
    default: return '';
  }
}

function getNextStatus(currentStatus) {
  const statusCycle = ['not_started', 'once', 'twice', 'thrice'];
  const currentIndex = statusCycle.indexOf(currentStatus || 'not_started');
  return statusCycle[(currentIndex + 1) % statusCycle.length];
}

// GENERALISIERTE HEADER MIT KREISEN - KORRIGIERT WIE ÜBERLANDFAHRTEN
function renderCategoryHeaderWithCircles(studentId, category, categoryKey, percentage, completedItems, totalItems) {
  const progress = StorageManager.getProgressForStudent(studentId);
  const ueCircles = progress[`${categoryKey}_header_ue`] || [];
  const quarterCircles = progress[`${categoryKey}_header_quarters`] || [];

  return `
    <div class="training-info-with-circles">
      <div class="training-info">
        <h3>${category.name}</h3>
        ${category.subtitle ? `<div class="training-subtitle">${category.subtitle}</div>` : ''}
      </div>
      <div class="grundstufe-circles" onclick="event.stopPropagation()">
        <div class="circle-row">
          ${ueCircles.map((circle, index) => `
            <div class="ue-circle" onclick="event.stopPropagation(); removeCategoryUECircle('${studentId}', '${categoryKey}', ${index})" title="UE ${index + 1} - Klick zum Entfernen">
              ${index + 1}
            </div>
          `).join('')}
          <div class="add-circle-btn" onclick="event.stopPropagation(); addCategoryUECircle('${studentId}', '${categoryKey}')" title="UE hinzufügen">+</div>
          ${ueCircles.length > 0 ? '<span style="margin-left: 8px; color: #22c55e; font-weight: 600; font-size: 14px;">UE</span>' : ''}
        </div>
        <div class="circle-row">
          ${quarterCircles.map((fillLevel, index) => `
            <div class="quarter-circle ${getFillLevelClass(fillLevel)}"
                 onclick="event.stopPropagation(); toggleCategoryQuarterCircle('${studentId}', '${categoryKey}', ${index})"
                 title="Klicken: 0% → 25% → 50% → 75% → Löschen"></div>
          `).join('')}
          <div class="add-circle-btn" onclick="event.stopPropagation(); addCategoryQuarterCircle('${studentId}', '${categoryKey}')" title="Viertel-Kreis hinzufügen">+</div>
          ${quarterCircles.length > 0 ? '<span style="margin-left: 8px; color: #22c55e; font-weight: 600; font-size: 14px;">UE</span>' : ''}
        </div>
      </div>
    </div>
    <div class="training-progress">
      <div class="progress-circle"></div>
      <div class="progress-text">${percentage}%</div>
      <div class="progress-count">(${completedItems}/${totalItems})</div>
      <div class="dropdown-arrow">▼</div>
    </div>
  `;
}

// GENERALISIERTE HEADER FÜR SPEZIAL-FAHRTEN (ÜBERLAND, AUTOBAHN, NACHT)
function renderSpecialFahrtenHeader(studentId, category, categoryKey, percentage, completedItems, totalItems, blueCircleCount) {
  const progress = StorageManager.getProgressForStudent(studentId);
  const blueCircles = progress[`${categoryKey}_blue_circles`] || Array(blueCircleCount).fill(false);
  const quarterCircles = progress[`${categoryKey}_header_quarters`] || [];

  return `
    <div class="training-info-with-circles">
      <div class="training-info">
        <h3>${category.name}</h3>
        ${category.subtitle ? `<div class="training-subtitle">${category.subtitle}</div>` : ''}
      </div>
      <div class="grundstufe-circles" onclick="event.stopPropagation()">
        <div class="circle-row">
          ${blueCircles.map((filled, index) => `
            <div class="ue-circle ${filled ? 'blue-filled' : 'blue-empty'}" onclick="event.stopPropagation(); toggleBlueCircle('${studentId}', '${categoryKey}', ${index})" title="${category.name} ${index + 1} - Klick zum Füllen/Leeren">
              ${index + 1}
            </div>
          `).join('')}
          <span style="margin-left: 8px; color: #3b82f6; font-weight: 600; font-size: 14px;">PS</span>
        </div>
        <div class="circle-row">
          ${quarterCircles.map((fillLevel, index) => `
            <div class="quarter-circle ${getFillLevelClass(fillLevel)}"
                 onclick="event.stopPropagation(); toggleCategoryQuarterCircle('${studentId}', '${categoryKey}', ${index})"
                 title="Klicken: 0% → 25% → 50% → 75% → Löschen"></div>
          `).join('')}
          <div class="add-circle-btn" onclick="event.stopPropagation(); addCategoryQuarterCircle('${studentId}', '${categoryKey}')" title="Viertel-Kreis hinzufügen">+</div>
          ${quarterCircles.length > 0 ? '<span style="margin-left: 8px; color: #22c55e; font-weight: 600; font-size: 14px;">UE</span>' : ''}
        </div>
      </div>
    </div>
    <div class="training-progress">
      <div class="progress-circle"></div>
      <div class="progress-text">${percentage}%</div>
      <div class="progress-count">(${completedItems}/${totalItems})</div>
      <div class="dropdown-arrow">▼</div>
    </div>
  `;
}

// SPEZIELLE HEADER FÜR ÜBERLANDFAHRTEN MIT BLAUEN UND GRÜNEN KREISEN (für Rückwärtskompatibilität)
function renderUberlandfahrtenHeader(studentId, category, categoryKey, percentage, completedItems, totalItems) {
  return renderSpecialFahrtenHeader(studentId, category, categoryKey, percentage, completedItems, totalItems, 5);
}

function getFillLevelClass(fillLevel) {
  switch (fillLevel) {
    case 1: return 'pie-25';
    case 2: return 'pie-50';
    case 3: return 'pie-75';
    case 4: return 'pie-100';
    default: return 'pie-0';
  }
}

// LIVE-UPDATE DER GESAMTÜBERSICHT
function updateGesamtFortschritt(studentId) {
  // Finde die "Geleistete Fahrten" Sektion
  const sectionTitles = document.querySelectorAll('.section-title');
  let gesamtSection = null;
  
  sectionTitles.forEach(title => {
    if (title.textContent.includes('Geleistete Fahrten')) {
      gesamtSection = title.closest('.section');
    }
  });
  
  if (!gesamtSection) return;
  
  // Finde das Content-Element (alles nach dem section-header)
  const sectionHeader = gesamtSection.querySelector('.section-header');
  const contentElement = sectionHeader.nextElementSibling;
  
  if (contentElement) {
    // Generiere neuen Inhalt und entferne die äußeren div-Tags
    const newContent = renderGesamtFortschritt(studentId);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = newContent;
    const innerContent = tempDiv.firstElementChild;
    
    // Ersetze den Inhalt
    contentElement.innerHTML = innerContent.innerHTML;
  }
}

// GENERISCHE KATEGORIE HEADER FUNKTIONEN FÜR ALLE KATEGORIEN (mit Live-Update)
function addCategoryUECircle(studentId, categoryKey) {
  const progress = StorageManager.getProgressForStudent(studentId);
  const headerKey = `${categoryKey}_header_ue`;
  if (!progress[headerKey]) progress[headerKey] = [];
  
  progress[headerKey].push(true);
  
  StorageManager.saveProgressForStudent(studentId, progress);
  updateCategoryHeaderOnly(studentId, categoryKey);
  updateGesamtFortschritt(studentId); // Live-Update!
}

function removeCategoryUECircle(studentId, categoryKey, index) {
  const progress = StorageManager.getProgressForStudent(studentId);
  const headerKey = `${categoryKey}_header_ue`;
  if (!progress[headerKey]) return;
  
  progress[headerKey].splice(index, 1);
  
  StorageManager.saveProgressForStudent(studentId, progress);
  updateCategoryHeaderOnly(studentId, categoryKey);
  updateGesamtFortschritt(studentId); // Live-Update!
}

function addCategoryQuarterCircle(studentId, categoryKey) {
  const progress = StorageManager.getProgressForStudent(studentId);
  const headerKey = `${categoryKey}_header_quarters`;
  if (!progress[headerKey]) progress[headerKey] = [];
  
  progress[headerKey].push(0);
  
  StorageManager.saveProgressForStudent(studentId, progress);
  updateCategoryHeaderOnly(studentId, categoryKey);
  updateGesamtFortschritt(studentId); // Live-Update!
}

function toggleCategoryQuarterCircle(studentId, categoryKey, index) {
  const progress = StorageManager.getProgressForStudent(studentId);
  const headerKey = `${categoryKey}_header_quarters`;
  
  if (!progress[headerKey]) return;
  
  const currentLevel = progress[headerKey][index];
  
  if (currentLevel === 3) { 
    // Bei 75% (3. Klick): Nächster Klick löscht den Kreis komplett
    progress[headerKey].splice(index, 1); // Viertel-Kreis komplett entfernen
  } else { 
    // Normal: 0 → 1 → 2 → 3 (75%), dann Löschen
    progress[headerKey][index] = currentLevel + 1;
  }
  
  StorageManager.saveProgressForStudent(studentId, progress);
  updateCategoryHeaderOnly(studentId, categoryKey);
  updateGesamtFortschritt(studentId); // Live-Update!
}

function updateCategoryHeaderOnly(studentId, categoryKey) {
  const category = TRAINING_CATEGORIES[categoryKey];
  if (!category) return;
  
  const progress = StorageManager.getProgressForStudent(studentId);
  const [completedItems, totalItems] = [0, 0]; // Dummy values für Header
  const percentage = 0; // Dummy value für Header
  
  let headerHtml;
  if (categoryKey === 'uberlandfahrten') {
    headerHtml = renderSpecialFahrtenHeader(studentId, category, categoryKey, percentage, completedItems, totalItems, 5);
  } else if (categoryKey === 'autobahn') {
    headerHtml = renderSpecialFahrtenHeader(studentId, category, categoryKey, percentage, completedItems, totalItems, 4);
  } else if (categoryKey === 'dammerung_dunkelheit') {
    headerHtml = renderSpecialFahrtenHeader(studentId, category, categoryKey, percentage, completedItems, totalItems, 3);
  } else {
    headerHtml = renderCategoryHeaderWithCircles(studentId, category, categoryKey, percentage, completedItems, totalItems);
  }
  
  const headerElement = document.querySelector(`.training-header.${categoryKey}`);
  if (headerElement) {
    headerElement.innerHTML = headerHtml;
  }
}

// GRUNDSTUFE HEADER FUNKTIONEN (für Rückwärtskompatibilität) - mit Live-Update
function addGrundstufeUECircle(studentId) {
  addCategoryUECircle(studentId, 'grundstufe');
}

function removeGrundstufeUECircle(studentId, index) {
  removeCategoryUECircle(studentId, 'grundstufe', index);
}

function addGrundstufeQuarterCircle(studentId) {
  addCategoryQuarterCircle(studentId, 'grundstufe');
}

function toggleGrundstufeQuarterCircle(studentId, index) {
  toggleCategoryQuarterCircle(studentId, 'grundstufe', index);
}

function removeGrundstufeQuarterCircle(studentId, index) {
  const progress = StorageManager.getProgressForStudent(studentId);
  if (!progress.grundstufe_header_quarters) return;
  
  progress.grundstufe_header_quarters.splice(index, 1);
  
  StorageManager.saveProgressForStudent(studentId, progress);
  updateCategoryHeaderOnly(studentId, 'grundstufe');
  updateGesamtFortschritt(studentId); // Live-Update!
}

// FUNKTIONEN FÜR BLAUE KREISE (ÜBERLAND, AUTOBAHN, NACHT) - mit Live-Update
function toggleBlueCircle(studentId, categoryKey, index) {
  const progress = StorageManager.getProgressForStudent(studentId);
  const blueKey = `${categoryKey}_blue_circles`;
  
  // Bestimme Anzahl der Kreise basierend auf Kategorie
  let circleCount = 5; // Standard: Überlandfahrten
  if (categoryKey === 'autobahn') circleCount = 4;
  if (categoryKey === 'dammerung_dunkelheit') circleCount = 3;
  
  if (!progress[blueKey]) progress[blueKey] = Array(circleCount).fill(false);
  
  // Toggle den Kreis
  progress[blueKey][index] = !progress[blueKey][index];
  
  StorageManager.saveProgressForStudent(studentId, progress);
  updateCategoryHeaderOnly(studentId, categoryKey);
  updateGesamtFortschritt(studentId); // Live-Update!
}

// GRUNDSTUFE HEADER MIT KREISEN (für Rückwärtskompatibilität)
function renderGrundstufeHeader(studentId, category, percentage, completedItems, totalItems) {
  return renderCategoryHeaderWithCircles(studentId, category, 'grundstufe', percentage, completedItems, totalItems);
}

// PDF-EXPORT FUNKTIONEN (EINFACH FÜR MOBILE)
function exportToPDF(studentId) {
  // Hole die aktuellsten Daten direkt aus dem Storage
  const student = StorageManager.getStudentById(studentId);
  if (!student) {
    alert('Schüler nicht gefunden!');
    return;
  }

  // Debug: Zeige die aktuellen Daten
  console.log('PDF-Export für:', student.name, student.surname);
  console.log('Theorieprüfung:', student.theory_exam_date, student.theory_exam_passed);
  console.log('Praktische Prüfung:', student.practical_exam_date, student.practical_exam_passed);

  // Erstelle Print-Dokument mit aktuellen Daten
  const printDocument = createPrintDocument(student);
  
  // Füge es zum Body hinzu
  document.body.appendChild(printDocument);
  
  // Einfacher Ansatz für Mobile - längere Wartezeit
  setTimeout(() => {
    try {
      window.print();
    } catch (error) {
      alert('PDF-Export fehlgeschlagen. Versuchen Sie es erneut.');
      console.error('PDF-Export Fehler:', error);
    }
    
    // Cleanup
    setTimeout(() => {
      if (document.body.contains(printDocument)) {
        document.body.removeChild(printDocument);
      }
    }, 3000);
  }, 1000);
}

function createPrintDocument(student) {
  const progress = StorageManager.getProgressForStudent(student.id);
  
  const printDiv = document.createElement('div');
  printDiv.className = 'print-document';
  
  printDiv.innerHTML = `
    <!-- HEADER -->
    <div class="print-header">
      <div class="print-title">FAHRSCHUL-AUSBILDUNGSNACHWEIS</div>
      <div>Vollständige Dokumentation der Ausbildungsinhalte</div>
    </div>
    
    <!-- SCHÜLERINFORMATIONEN -->
    <div class="print-student-info">
      <table class="print-info-table">
        <tr>
          <td class="label">Name:</td>
          <td>${student.name} ${student.surname}</td>
          <td class="label">Geburtsdatum:</td>
          <td>${formatGermanDate(student.date_of_birth) || 'Nicht angegeben'}</td>
        </tr>
        <tr>
          <td class="label">Adresse:</td>
          <td colspan="3">${formatFullAddress(student)}</td>
        </tr>
        <tr>
          <td class="label">Telefon:</td>
          <td>${student.phone || 'Nicht angegeben'}</td>
          <td class="label">Brillenträger:</td>
          <td>${student.wears_glasses ? 'Ja' : 'Nein'}</td>
        </tr>
        <tr>
          <td class="label">Ausbildungsbeginn:</td>
          <td>${formatGermanDate(student.start_date)}</td>
          <td class="label">Theorieprüfung:</td>
          <td>${student.theory_exam_date ? formatGermanDate(student.theory_exam_date) : 'Nicht absolviert'}${student.theory_exam_passed ? ' ✅ Bestanden' : ''}</td>
        </tr>
        <tr>
          <td class="label">Praktische Prüfung:</td>
          <td colspan="3">${student.practical_exam_date ? formatGermanDate(student.practical_exam_date) : 'Nicht absolviert'}${student.practical_exam_passed ? ' ✅ Bestanden' : ''}</td>
        </tr>
      </table>
    </div>
    
    <!-- AUSBILDUNGSINHALTE -->
    <div class="print-categories">
      ${generatePrintCategories(student.id)}
    </div>
    
    <!-- GESAMTÜBERSICHT -->
    <div class="print-summary">
      <div class="print-summary-title">GESAMTÜBERSICHT GELEISTETER STUNDEN</div>
      ${generatePrintSummary(student.id)}
    </div>
    
    <!-- UNTERSCHRIFTEN -->
    <div class="print-signatures">
      <div class="print-date">
        Datum: <span class="print-date-line"></span>
      </div>
      
      <div class="print-signature-text">
        Mit meiner Unterschrift bestätige ich, dass alle aufgeführten Ausbildungsinhalte ordnungsgemäß mit mir durchgeführt wurden.
      </div>
      
      <div class="print-signature-fields">
        <div class="print-signature-field">
          <div class="print-signature-line"></div>
          <div class="print-signature-label">Fahrschüler/in<br>${student.name} ${student.surname}</div>
        </div>
        <div class="print-signature-field">
          <div class="print-signature-line"></div>
          <div class="print-signature-label">Fahrlehrer/in</div>
        </div>
      </div>
    </div>
  `;
  
  return printDiv;
}

function formatFullAddress(student) {
  let address = student.address || '';
  if (student.postal_code) address += (address ? ', ' : '') + student.postal_code;
  if (student.city) address += (address ? ' ' : '') + student.city;
  return address || 'Nicht angegeben';
}

function generatePrintCategories(studentId) {
  const progress = StorageManager.getProgressForStudent(studentId);
  
  return Object.entries(TRAINING_CATEGORIES).map(([categoryKey, category]) => {
    const categoryProgress = progress[categoryKey] || {};
    
    return `
      <div class="print-category">
        <div class="print-category-title">${category.name.toUpperCase()}</div>
        ${generatePrintSections(category.sections, categoryKey, categoryProgress)}
      </div>
    `;
  }).join('');
}

function generatePrintSections(sections, categoryKey, categoryProgress) {
  function renderSection(sections, level = 0) {
    return Object.entries(sections).map(([sectionKey, section]) => {
      if (section.sections) {
        return `
          <div style="margin-left: ${level * 20}px;">
            ${section.name ? `<div style="font-weight: bold; margin: 10px 0 5px 0;">${section.name}</div>` : ''}
            ${renderSection(section.sections, level + 1)}
          </div>
        `;
      } else if (section.items) {
        const sectionProgress = categoryProgress[sectionKey] || {};
        
        return `
          <div style="margin-left: ${level * 20}px;">
            ${section.name ? `<div style="font-weight: bold; margin: 10px 0 5px 0;">${section.name}</div>` : ''}
            <div class="print-items">
              ${section.items.map(item => {
                const status = sectionProgress[item] || 'not_started';
                const symbol = getStatusSymbol(status);
                const statusClass = status !== 'not_started' ? `checked-${status}` : '';
                
                return `
                  <div class="print-item">
                    <div class="print-checkbox ${statusClass}">${symbol}</div>
                    <span>${item}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }
      return '';
    }).join('');
  }
  
  return renderSection(sections);
}

function generatePrintSummary(studentId) {
  const progress = StorageManager.getProgressForStudent(studentId);
  
  // Sammle alle UE-Kreise
  let totalUECircles = 0;
  const allCategories = ['grundstufe', 'aufbaustufe', 'leistungsstufe', 'grundfahraufgaben', 'uberlandfahrten', 'autobahn', 'dammerung_dunkelheit'];
  
  allCategories.forEach(categoryKey => {
    const ueCircles = progress[`${categoryKey}_header_ue`] || [];
    totalUECircles += ueCircles.length;
  });
  
  // Sammle alle Viertel-Kreise und rechne sie korrekt um (15min-Schritte)
  let totalQuarterUE = 0;
  allCategories.forEach(categoryKey => {
    const quarterCircles = progress[`${categoryKey}_header_quarters`] || [];
    quarterCircles.forEach(fillLevel => {
      // 15min pro Schritt ÷ 45min pro UE = 0.333 UE pro Schritt
      totalQuarterUE += fillLevel * (15/45);
    });
  });
  
  // Sammle alle blauen PS-Kreise
  let totalBlueCircles = 0;
  const fahrtenCategories = ['uberlandfahrten', 'autobahn', 'dammerung_dunkelheit'];
  
  fahrtenCategories.forEach(categoryKey => {
    const blueCircles = progress[`${categoryKey}_blue_circles`] || [];
    totalBlueCircles += blueCircles.filter(circle => circle === true).length;
  });
  
  return `
    <table class="print-summary-table">
      <thead>
        <tr>
          <th>Art der Stunden</th>
          <th>Anzahl</th>
          <th>Bemerkung</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>UE-Stunden gesamt</td>
          <td><strong>${totalUECircles}</strong></td>
          <td>Vollständige Unterrichtseinheiten</td>
        </tr>
        <tr>
          <td>Viertel-UE gesamt</td>
          <td><strong>${totalQuarterUE.toFixed(2).replace('.00', '')}</strong></td>
          <td>15-Minuten-Einheiten (15min = 0.33 UE)</td>
        </tr>
        <tr>
          <td>PS-Fahrten gesamt</td>
          <td><strong>${totalBlueCircles}</strong></td>
          <td>Pflichtfahrten (Überland, Autobahn, Nacht)</td>
        </tr>
      </tbody>
    </table>
  `;
}

// Event Handlers (optimiert ohne Blinken)
function openStudentDetail(studentId) {
  renderStudentDetail(studentId);
}

function deleteStudent(studentId) {
  const student = StorageManager.getStudentById(studentId);
  if (student && confirm(`${student.name} ${student.surname} wirklich löschen?`)) {
    StorageManager.deleteStudent(studentId);
    renderStudentList();
  }
}

function toggleFahrt(studentId, category, index) {
  const student = StorageManager.getStudentById(studentId);
  if (!student) return;

  const updatedFahrten = [...student[category]];
  
  // Wenn es eine Übungsfahrt ist und bereits completed ist, dann löschen
  if ((category === 'uebungsfahrten_ganz' || category === 'uebungsfahrten_halb') && updatedFahrten[index]) {
    // Löschen statt toggle
    updatedFahrten.splice(index, 1);
  } else {
    // Normales Toggle für Pflichtfahrten oder leere Übungsfahrten
    updatedFahrten[index] = !updatedFahrten[index];
  }

  const updatedStudent = {
    ...student,
    [category]: updatedFahrten
  };

  StorageManager.updateStudent(updatedStudent);

  // Bereich neu rendern für Übungsfahrten, nur Button updaten für Pflichtfahrten
  if (category === 'uebungsfahrten_ganz' || category === 'uebungsfahrten_halb') {
    renderStudentDetail(studentId);
  } else {
    // Nur den Button aktualisieren - KEIN BLINKEN!
    const button = document.querySelector(`button[data-category="${category}"][data-index="${index}"]`);
    if (button) {
      if (updatedFahrten[index]) {
        button.className = 'fahrt-btn completed';
      } else {
        button.className = 'fahrt-btn incomplete';
      }
    }
  }
}

function addFahrt(studentId, category) {
  const student = StorageManager.getStudentById(studentId);
  if (!student) return;

  const updatedFahrten = [...(student[category] || []), false];

  const updatedStudent = {
    ...student,
    [category]: updatedFahrten
  };

  StorageManager.updateStudent(updatedStudent);

  // Nur den Fahrt-Bereich neu rendern
  const buttonsContainer = document.getElementById(`buttons-${category}`);
  if (buttonsContainer) {
    const newIndex = updatedFahrten.length - 1;
    const addButton = buttonsContainer.querySelector('.add, .add-green');
    const statusSpan = buttonsContainer.querySelector('.fahrt-status');

    const newButton = document.createElement('button');
    newButton.className = 'fahrt-btn incomplete';
    newButton.onclick = () => toggleFahrt(studentId, category, newIndex);
    newButton.setAttribute('data-category', category);
    newButton.setAttribute('data-index', newIndex);
    newButton.textContent = newIndex + 1;

    buttonsContainer.insertBefore(newButton, addButton);

    // Status aktualisieren
    if (statusSpan) {
      const completed = updatedFahrten.filter(Boolean).length;
      statusSpan.textContent = `(${completed}/${updatedFahrten.length})`;
    }
  }
}

function toggleTrainingSection(sectionId) {
  const section = document.getElementById(`section-${sectionId}`);
  const arrow = section.parentElement.querySelector('.dropdown-arrow');
  
  if (section.classList.contains('expanded')) {
    section.classList.remove('expanded');
    arrow.style.transform = 'rotate(0deg)';
  } else {
    section.classList.add('expanded');
    arrow.style.transform = 'rotate(180deg)';
  }
}

function toggleProgressItem(studentId, categoryKey, sectionKey, itemKey, event) {
  const progress = StorageManager.getProgressForStudent(studentId);
  
  if (!progress[categoryKey]) progress[categoryKey] = {};
  if (!progress[categoryKey][sectionKey]) progress[categoryKey][sectionKey] = {};
  
  const currentStatus = progress[categoryKey][sectionKey][itemKey] || 'not_started';
  const nextStatus = getNextStatus(currentStatus);
  
  progress[categoryKey][sectionKey][itemKey] = nextStatus;
  
  StorageManager.saveProgressForStudent(studentId, progress);

  // Nur das angeklickte Element aktualisieren
  const element = event.target;
  const symbol = getStatusSymbol(nextStatus);
  const statusClass = nextStatus !== 'not_started' ? nextStatus : '';
  
  element.textContent = symbol;
  element.className = `progress-checkbox ${statusClass}`;

  // Kategorie-Fortschritt aktualisieren
  updateCategoryProgress(categoryKey, studentId);
}

function updateCategoryProgress(categoryKey, studentId) {
  const category = TRAINING_CATEGORIES[categoryKey];
  if (!category) return;

  const progress = StorageManager.getProgressForStudent(studentId);
  const categoryProgress = progress[categoryKey] || {};
  
  let completedItems = 0;
  const totalItems = countTotalItems(category.sections);

  function countCompletedItems(sections) {
    Object.entries(sections).forEach(([sectionKey, section]) => {
      if (section.sections) {
        countCompletedItems(section.sections);
      } else if (section.items) {
        section.items.forEach(item => {
          const status = categoryProgress[sectionKey] && categoryProgress[sectionKey][item];
          if (status && status !== 'not_started') {
            completedItems++;
          }
        });
      }
    });
  }

  countCompletedItems(category.sections);

  const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  // UI aktualisieren
  const progressText = document.querySelector(`#section-${categoryKey}`).parentElement.querySelector('.progress-text');
  const progressCount = document.querySelector(`#section-${categoryKey}`).parentElement.querySelector('.progress-count');
  
  if (progressText) progressText.textContent = `${percentage}%`;
  if (progressCount) progressCount.textContent = `(${completedItems}/${totalItems})`;
}

// Neuer Fahrschüler Dialog
function showNewStudentDialog() {
  const dialog = document.createElement('div');
  dialog.className = 'dialog-overlay';
  dialog.innerHTML = `
    <div class="dialog">
      <h2>Neuer Schüler</h2>
      <div class="form-group">
        <label>Vorname *</label>
        <input type="text" id="new-name" placeholder="z.B. Max" required>
      </div>
      <div class="form-group">
        <label>Nachname *</label>
        <input type="text" id="new-surname" placeholder="z.B. Mustermann" required>
      </div>
      <div class="form-group">
        <label>Telefon</label>
        <input type="tel" id="new-phone" placeholder="01234567890">
      </div>
      <div class="form-group">
        <label>Straße, Hausnummer</label>
        <input type="text" id="new-address" placeholder="z.B. Musterstraße 123">
      </div>
      <div class="form-group">
        <label>Postleitzahl</label>
        <input type="text" id="new-postal-code" placeholder="z.B. 12345" maxlength="5">
      </div>
      <div class="form-group">
        <label>Stadt</label>
        <input type="text" id="new-city" placeholder="z.B. Berlin">
      </div>
      <div class="form-group">
        <label>Geburtsdatum</label>
        <input type="date" id="new-birth">
      </div>
      <div class="form-group">
        <label>Ausbildungsbeginn</label>
        <input type="date" id="new-start" value="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" id="new-glasses" style="margin-right: 8px;">
          Brillenträger
        </label>
      </div>
      <div class="form-group">
        <label>Theorieprüfung Datum</label>
        <input type="date" id="new-theory-date">
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" id="new-theory-passed" style="margin-right: 8px;">
          Theorieprüfung bestanden
        </label>
      </div>
      <div class="form-group">
        <label>Praktische Prüfung Datum</label>
        <input type="date" id="new-practical-date">
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" id="new-practical-passed" style="margin-right: 8px;">
          Praktische Prüfung bestanden
        </label>
      </div>
      <div class="dialog-buttons">
        <button class="btn-secondary" onclick="closeNewStudentDialog()">Abbrechen</button>
        <button class="btn-primary" onclick="createNewStudent()">Erstellen</button>
      </div>
    </div>
  `;

  document.body.appendChild(dialog);
  
  // Focus auf erstes Eingabefeld
  setTimeout(() => {
    document.getElementById('new-name').focus();
  }, 100);
}

function closeNewStudentDialog() {
  const dialog = document.querySelector('.dialog-overlay');
  if (dialog) {
    dialog.remove();
  }
}

function createNewStudent() {
  const name = document.getElementById('new-name').value.trim();
  const surname = document.getElementById('new-surname').value.trim();

  if (!name || !surname) {
    alert('Bitte Vor- und Nachname eingeben!');
    return;
  }

  const newStudent = {
    id: 'student-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
    name: name,
    surname: surname,
    date_of_birth: document.getElementById('new-birth').value || null,
    phone: document.getElementById('new-phone').value.trim() || null,
    address: document.getElementById('new-address').value.trim() || null,
    postal_code: document.getElementById('new-postal-code').value.trim() || null,
    city: document.getElementById('new-city').value.trim() || null,
    start_date: document.getElementById('new-start').value || new Date().toISOString().split('T')[0],
    theory_exam_date: document.getElementById('new-theory-date').value || null,
    practical_exam_date: document.getElementById('new-practical-date').value || null,
    theory_exam_passed: document.getElementById('new-theory-passed').checked,
    practical_exam_passed: document.getElementById('new-practical-passed').checked,
    wears_glasses: document.getElementById('new-glasses').checked,
    ueberlandfahrten: [0,0,0,0,0], // 0-4 Füllstände
    autobahnfahrten: [0,0,0,0], // 0-4 Füllstände
    nachtfahrten: [0,0,0], // 0-4 Füllstände
    uebungsfahrten_ganz: [],
    uebungsfahrten_halb: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const students = StorageManager.getStudents();
  students.push(newStudent);
  StorageManager.saveStudents(students);

  closeNewStudentDialog();
  renderStudentList();

  // Erfolgsmeldung
  setTimeout(() => {
    alert(`✅ ${name} ${surname} wurde erfolgreich hinzugefügt!`);
  }, 100);
}

function showAlert(message) {
  alert(message);
}

// SCHÜLER BEARBEITEN FUNKTION
function showEditStudentDialog(studentId) {
  const student = StorageManager.getStudentById(studentId);
  if (!student) return;

  const dialogHtml = `
    <div class="dialog-overlay" onclick="closeEditDialog(event)">
      <div class="dialog" onclick="event.stopPropagation()">
        <h2>Schüler bearbeiten</h2>
        <form onsubmit="updateStudent(event, '${studentId}')">
          <div class="form-group">
            <label for="edit-name">Vorname *</label>
            <input type="text" id="edit-name" value="${student.name}" required>
          </div>
          <div class="form-group">
            <label for="edit-surname">Nachname *</label>
            <input type="text" id="edit-surname" value="${student.surname}" required>
          </div>
          <div class="form-group">
            <label for="edit-phone">Telefon</label>
            <input type="tel" id="edit-phone" value="${student.phone || ''}" placeholder="01234567890">
          </div>
          <div class="form-group">
            <label for="edit-address">Straße, Hausnummer</label>
            <input type="text" id="edit-address" value="${student.address || ''}" placeholder="z.B. Musterstraße 123">
          </div>
          <div class="form-group">
            <label for="edit-postal-code">Postleitzahl</label>
            <input type="text" id="edit-postal-code" value="${student.postal_code || ''}" placeholder="z.B. 12345" maxlength="5">
          </div>
          <div class="form-group">
            <label for="edit-city">Stadt</label>
            <input type="text" id="edit-city" value="${student.city || ''}" placeholder="z.B. Berlin">
          </div>
          <div class="form-group">
            <label for="edit-birth">Geburtsdatum</label>
            <input type="date" id="edit-birth" value="${student.date_of_birth || ''}">
          </div>
          <div class="form-group">
            <label for="edit-start">Ausbildungsbeginn</label>
            <input type="date" id="edit-start" value="${student.start_date || ''}">
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" id="edit-glasses" ${student.wears_glasses ? 'checked' : ''} style="margin-right: 8px;">
              Brillenträger
            </label>
          </div>
          <div class="form-group">
            <label for="edit-theory-date">Theorieprüfung Datum</label>
            <input type="date" id="edit-theory-date" value="${student.theory_exam_date || ''}">
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" id="edit-theory-passed" ${student.theory_exam_passed ? 'checked' : ''} style="margin-right: 8px;">
              Theorieprüfung bestanden
            </label>
          </div>
          <div class="form-group">
            <label for="edit-practical-date">Praktische Prüfung Datum</label>
            <input type="date" id="edit-practical-date" value="${student.practical_exam_date || ''}">
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" id="edit-practical-passed" ${student.practical_exam_passed ? 'checked' : ''} style="margin-right: 8px;">
              Praktische Prüfung bestanden
            </label>
          </div>
          <div class="dialog-buttons">
            <button type="button" class="btn-secondary" onclick="closeEditDialog()">Abbrechen</button>
            <button type="submit" class="btn-primary">Speichern</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', dialogHtml);
}

function closeEditDialog(event) {
  if (event && event.target !== event.currentTarget) return;
  const dialog = document.querySelector('.dialog-overlay');
  if (dialog) dialog.remove();
}

function updateStudent(event, studentId) {
  event.preventDefault();

  const name = document.getElementById('edit-name').value.trim();
  const surname = document.getElementById('edit-surname').value.trim();
  const phone = document.getElementById('edit-phone').value.trim();
  const address = document.getElementById('edit-address').value.trim();
  const postalCode = document.getElementById('edit-postal-code').value.trim();
  const city = document.getElementById('edit-city').value.trim();
  const dateBirth = document.getElementById('edit-birth').value;
  const startDate = document.getElementById('edit-start').value;
  const wearsGlasses = document.getElementById('edit-glasses').checked;
  const theoryExamDate = document.getElementById('edit-theory-date').value;
  const theoryExamPassed = document.getElementById('edit-theory-passed').checked;
  const practicalExamDate = document.getElementById('edit-practical-date').value;
  const practicalExamPassed = document.getElementById('edit-practical-passed').checked;

  if (!name || !surname) {
    alert('❌ Vor- und Nachname sind erforderlich!');
    return;
  }

  const student = StorageManager.getStudentById(studentId);
  const updatedStudent = {
    ...student,
    name,
    surname,
    phone: phone || null,
    address: address || null,
    postal_code: postalCode || null,
    city: city || null,
    date_of_birth: dateBirth || null,
    start_date: startDate || student.start_date,
    wears_glasses: wearsGlasses,
    theory_exam_date: theoryExamDate || null,
    theory_exam_passed: theoryExamPassed,
    practical_exam_date: practicalExamDate || null,
    practical_exam_passed: practicalExamPassed,
    updated_at: new Date().toISOString()
  };

  StorageManager.updateStudent(updatedStudent);
  
  closeEditDialog();
  
  // Ansicht aktualisieren
  if (currentView === 'detail') {
    renderStudentDetail(studentId);
  } else {
    renderStudentList();
  }

  alert(`✅ ${name} ${surname} wurde erfolgreich aktualisiert!`);
}

// KOMMENTAR-FUNKTIONEN
function showCommentDialog(studentId, categoryKey, sectionKey, itemKey, event) {
  event.stopPropagation();

  const comments = getCommentsForStudent(studentId);
  const commentKey = `${categoryKey}_${sectionKey}_${itemKey}`;
  const existingComment = comments[commentKey] || '';

  const dialogHtml = `
    <div class="dialog-overlay" onclick="closeCommentDialog(event)">
      <div class="dialog" onclick="event.stopPropagation()">
        <h2>Kommentar</h2>
        <p style="margin-bottom: 16px; color: #6b7280;">${itemKey}</p>
        <div class="form-group">
          <label for="comment-text">Notiz / Kommentar:</label>
          <textarea id="comment-text" rows="4" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 8px; resize: vertical;">${existingComment}</textarea>
        </div>
        <div class="dialog-buttons">
          <button type="button" class="btn-secondary" onclick="closeCommentDialog()">Abbrechen</button>
          <button type="button" class="btn-primary" onclick="saveComment('${studentId}', '${commentKey}')">Speichern</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', dialogHtml);
}

function showStudentCommentDialog(studentId) {
  const comments = getCommentsForStudent(studentId);
  const existingComment = comments['student_general'] || '';

  const dialogHtml = `
    <div class="dialog-overlay" onclick="closeCommentDialog(event)">
      <div class="dialog" onclick="event.stopPropagation()">
        <h2>Schüler-Notizen</h2>
        <p style="margin-bottom: 16px; color: #6b7280;">Allgemeine Notizen zum Schüler</p>
        <div class="form-group">
          <label for="comment-text">Notiz / Kommentar:</label>
          <textarea id="comment-text" rows="6" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 8px; resize: vertical;">${existingComment}</textarea>
        </div>
        <div class="dialog-buttons">
          <button type="button" class="btn-secondary" onclick="closeCommentDialog()">Abbrechen</button>
          <button type="button" class="btn-primary" onclick="saveComment('${studentId}', 'student_general')">Speichern</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', dialogHtml);
}

function closeCommentDialog(event) {
  if (event && event.target !== event.currentTarget) return;
  const dialog = document.querySelector('.dialog-overlay');
  if (dialog) dialog.remove();
}

function saveComment(studentId, commentKey) {
  const commentText = document.getElementById('comment-text').value.trim();
  const comments = getCommentsForStudent(studentId);

  if (commentText) {
    comments[commentKey] = commentText;
  } else {
    delete comments[commentKey];
  }

  saveCommentsForStudent(studentId, comments);
  closeCommentDialog();

  // Ansicht aktualisieren um Kommentar-Icons zu zeigen
  if (currentView === 'detail') {
    renderStudentDetail(studentId);
  }

  if (commentText) {
    alert('✅ Kommentar gespeichert!');
  } else {
    alert('✅ Kommentar gelöscht!');
  }
}

function getCommentsForStudent(studentId) {
  const stored = localStorage.getItem('fahrschul_comments_professional');
  const allComments = stored ? JSON.parse(stored) : {};
  return allComments[studentId] || {};
}

function saveCommentsForStudent(studentId, comments) {
  const stored = localStorage.getItem('fahrschul_comments_professional');
  const allComments = stored ? JSON.parse(stored) : {};
  allComments[studentId] = comments;
  localStorage.setItem('fahrschul_comments_professional', JSON.stringify(allComments));
}

// App Initialization
function initApp() {
  try {
    console.log('🚗 Deutsche Fahrschul-App wird initialisiert...');
    
    // Demo-Daten initialisieren
    StorageManager.initDemoData();
    console.log('✅ Demo-Daten geladen');

    // Loading Screen ausblenden
    document.getElementById('loading').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    // Student List anzeigen
    renderStudentList();

    console.log('✅ Professionelle Version gestartet nach Ihren Bildern!');

  } catch (error) {
    console.error('❌ Fehler beim Initialisieren:', error);
    document.getElementById('loading').innerHTML = `
      <div class="loading-title">Fehler beim Laden</div>
      <div class="loading-subtitle">Bitte Seite neu laden</div>
    `;
  }
}

// App starten
// 3-CONTAINER RESPONSIVE LAYOUT-OPTIMIERUNG
function optimizeMobileLayouts() {
  const isTabletPortrait = window.innerWidth >= 769 && window.innerWidth <= 1024 && window.innerHeight > window.innerWidth;
  const isMobile = window.innerWidth <= 768;
  const isMobileLandscape = window.innerHeight <= 500 && window.innerWidth > window.innerHeight && window.innerWidth <= 900;
  
  if (isMobile || isTabletPortrait || isMobileLandscape) {
    let deviceType = 'Mobile';
    if (isTabletPortrait) deviceType = 'Tablet Portrait';
    if (isMobileLandscape) deviceType = 'Mobile Landscape';
    
    console.log(`📱 Starte ${deviceType} Layout-Optimierung...`);
    console.log('📱 Starte 3-Container Mobile Layout-Optimierung...');
    
    // TRAINING-HEADERS ZU FLEXBOX MACHEN
    const trainingHeaders = document.querySelectorAll('.training-header');
    trainingHeaders.forEach((header, index) => {
      header.style.display = 'flex';
      header.style.flexDirection = 'column';
      header.style.alignItems = 'stretch';
      header.style.gap = '0';
      
      console.log(`✅ Training-Header ${index + 1} zu Flexbox gemacht`);
    });
    
    // CONTAINER 1: TEXT-BEREICHE
    const textContainers = document.querySelectorAll('.training-info');
    textContainers.forEach((container, index) => {
      container.style.width = '100%';
      container.style.textAlign = 'center';
      container.style.padding = isTabletPortrait ? '16px' : '12px';
      container.style.margin = isTabletPortrait ? '0 0 12px 0' : '0 0 8px 0';
      
      console.log(`✅ Text-Container ${index + 1} optimiert für ${deviceType}`);
    });
    
    // CONTAINER 2: KREISE-BEREICHE  
    const circleContainers = document.querySelectorAll('.grundstufe-circles');
    circleContainers.forEach((container, index) => {
      container.style.width = '100%';
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.alignItems = 'center';
      container.style.justifyContent = 'center';
      container.style.padding = isTabletPortrait ? '16px' : '12px';
      container.style.margin = isTabletPortrait ? '0 0 12px 0' : '0 0 8px 0';
      container.style.gap = isTabletPortrait ? '10px' : '8px';
      
      // Kreise-Reihen zentrieren
      const circleRows = container.querySelectorAll('.circle-row');
      circleRows.forEach(row => {
        row.style.display = 'flex';
        row.style.justifyContent = 'center';
        row.style.alignItems = 'center';
        row.style.gap = isTabletPortrait ? '12px' : '8px';
        row.style.flexWrap = 'wrap';
        row.style.width = '100%';
        row.style.margin = isTabletPortrait ? '6px 0' : '4px 0';
      });
      
      console.log(`✅ Kreise-Container ${index + 1} zentriert`);
    });
    
    // CONTAINER 3: FORTSCHRITT-BEREICHE - UNTERSCHIEDLICHE BEHANDLUNG
    const progressElements = document.querySelectorAll('.training-progress');
    progressElements.forEach((progress, index) => {
      progress.style.width = '100%';
      progress.style.display = 'flex';
      progress.style.alignItems = 'center';
      progress.style.padding = isTabletPortrait ? '16px' : '12px';
      progress.style.margin = '0';
      progress.style.marginLeft = '0';
      progress.style.gap = isTabletPortrait ? '12px' : '8px';
      
      // SICHTBARKEIT UND POSITIONIERUNG SICHERSTELLEN
      progress.style.display = 'flex';
      progress.style.width = '100%';
      progress.style.position = 'relative';
      progress.style.zIndex = '10';
      
      // PRÜFE OB HEADER KREISE HAT
      const parentHeader = progress.closest('.training-header');
      const hasCircles = parentHeader && parentHeader.querySelector('.training-info-with-circles');
      
      if (isTabletPortrait) {
        if (hasCircles) {
          // MIT KREISEN: ZENTRIERT
          progress.style.justifyContent = 'center';
          progress.classList.add('has-circles');
          console.log(`✅ Progress ${index + 1} MIT Kreisen - zentriert`);
        } else {
          // OHNE KREISE: ZENTRIERT UNTER SUBTITEL  
          progress.style.justifyContent = 'center';
          progress.style.paddingRight = '0';
          progress.classList.add('no-circles');
          console.log(`✅ Progress ${index + 1} OHNE Kreise - zentriert unter Subtitel`);
        }
      } else {
        // MOBILE: IMMER ZENTRIERT
        progress.style.justifyContent = 'center';
        console.log(`✅ Progress ${index + 1} Mobile - zentriert`);
      }
      
      console.log(`✅ Fortschritt-Container ${index + 1} zentriert`);
    });
    
    console.log(`📱 ${deviceType} Layout-Optimierung abgeschlossen!`);
  }
}

// BEOBACHTER FÜR DYNAMISCHE INHALTE
function initMobileLayoutObserver() {
  const isTabletPortrait = window.innerWidth >= 769 && window.innerWidth <= 1024 && window.innerHeight > window.innerWidth;
  const isMobile = window.innerWidth <= 768;
  const isMobileLandscape = window.innerHeight <= 500 && window.innerWidth > window.innerHeight && window.innerWidth <= 900;
  
  if (isMobile || isTabletPortrait || isMobileLandscape) {
    const observer = new MutationObserver(function(mutations) {
      let shouldOptimize = false;
      
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          const target = mutation.target;
          if (target.classList && target.classList.contains('training-header')) {
            shouldOptimize = true;
          }
        }
      });
      
      if (shouldOptimize) {
        console.log('🔄 Training-Header verändert, re-optimiere...');
        setTimeout(optimizeMobileLayouts, 50);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    console.log('👁️ Responsive Layout Observer aktiviert für Mobile/Tablet');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('📱 DOM geladen, starte professionelle App nach Ihren Bildern...');
  
  // Versuche die App zu starten
  try {
    setTimeout(() => {
      initApp();
      
      // MOBILE OPTIMIERUNG IN MEHREREN WELLEN
      setTimeout(optimizeMobileLayouts, 100);   // Erste Welle
      setTimeout(optimizeMobileLayouts, 500);   // Zweite Welle
      setTimeout(optimizeMobileLayouts, 1000);  // Dritte Welle
      
      // Observer für dynamische Änderungen
      initMobileLayoutObserver();
    }, 100);
  } catch (error) {
    console.error('Fehler beim App-Start:', error);
    // Fallback: Lade die App trotzdem
    document.getElementById('loading').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('main-content').innerHTML = '<div style="padding: 20px;">App wird geladen...</div>';
  }
  
  // ZUSÄTZLICHE SICHERHEITSMASSNAHME: FORCE LAYOUT FIX NACH 5 SEKUNDEN
  setTimeout(() => {
    if (document.getElementById('loading').style.display !== 'none') {
      console.log('⚠️ App immer noch am Laden, erzwinge Layout-Fix...');
      // App manuell anzeigen falls sie hängt
      document.getElementById('loading').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
      
      // Versuche den Content zu rendern falls er fehlt
      if (document.getElementById('main-content').innerHTML.trim() === '') {
        renderStudentList();
      }
    }
    
    // ERZWINGE PROGRESS INDICATOR FIX
    const progressElements = document.querySelectorAll('.training-progress');
    progressElements.forEach((progress, index) => {
      // POSITION FIX: ALLE PROGRESS-INDIKATOREN ZENTRIEREN
      progress.style.display = 'flex';
      progress.style.justifyContent = 'center';
      progress.style.width = '100%';
      progress.style.alignItems = 'center';
      progress.style.gap = '12px';
      progress.style.padding = '16px';
      progress.style.position = 'relative';
      progress.style.zIndex = '10';
      
      console.log(`🔧 Progress-Indikator ${index + 1} zentriert (Force-Fix)`);
    });
    
    console.log('✅ Force Layout-Fix abgeschlossen');
  }, 5000);
});

