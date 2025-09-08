import React, { useState, useEffect } from 'react';
import './App.css';

// Deutsche Fahrschul-App - Modular und Performance-optimiert

const StorageManager = {
  getStudents: () => {
    const students = localStorage.getItem('students');
    return students ? JSON.parse(students) : [];
  },
  
  saveStudents: (students) => {
    localStorage.setItem('students', JSON.stringify(students));
  },
  
  addStudent: (student) => {
    const students = StorageManager.getStudents();
    student.id = Date.now().toString();
    students.push(student);
    StorageManager.saveStudents(students);
    return student;
  },
  
  deleteStudent: (studentId) => {
    const students = StorageManager.getStudents();
    const filtered = students.filter(s => s.id !== studentId);
    StorageManager.saveStudents(filtered);
  },
  
  updateStudent: (updatedStudent) => {
    const students = StorageManager.getStudents();
    const index = students.findIndex(s => s.id === updatedStudent.id);
    if (index !== -1) {
      students[index] = updatedStudent;
      StorageManager.saveStudents(students);
    }
  },
  
  getStudentById: (studentId) => {
    const students = StorageManager.getStudents();
    return students.find(s => s.id === studentId);
  }
};

const ThemeContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState('list'); // 'list' oder 'detail'
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(StorageManager.getStudents());
    
    // Theme aus localStorage laden
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const refreshStudents = () => {
    setStudents(StorageManager.getStudents());
  };

  const showStudentDetail = (student) => {
    setSelectedStudent(student);
    setCurrentView('detail');
  };

  const showStudentList = () => {
    setCurrentView('list');
    setSelectedStudent(null);
    refreshStudents();
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="App">
        {currentView === 'list' ? (
          <StudentList 
            students={students}
            onStudentSelect={showStudentDetail}
            onStudentDeleted={refreshStudents}
            onToggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          />
        ) : (
          <StudentDetail 
            student={selectedStudent}
            onBack={showStudentList}
            onToggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

// Komponente für die Schülerliste
function StudentList({ students, onStudentSelect, onStudentDeleted, onToggleTheme, isDarkMode }) {
  const [showNewStudentDialog, setShowNewStudentDialog] = useState(false);

  const deleteStudent = (studentId, event) => {
    event.stopPropagation();
    const student = StorageManager.getStudentById(studentId);
    if (student && window.confirm(`${student.name} ${student.surname} wirklich löschen?`)) {
      StorageManager.deleteStudent(studentId);
      onStudentDeleted();
    }
  };

  return (
    <div>
      <header className="main-header">
        <h1>Deutsche Fahrschul-App</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button className="theme-toggle" onClick={onToggleTheme}>
            <span className="icon">{isDarkMode ? '☀️' : '🌙'}</span>
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
          <button className="btn-primary" onClick={() => setShowNewStudentDialog(true)}>
            <span>➕</span>
            Neuer Schüler
          </button>
        </div>
      </header>

      <div className="container">
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard 
              key={student.id}
              student={student}
              onClick={() => onStudentSelect(student)}
              onDelete={(e) => deleteStudent(student.id, e)}
            />
          ))}
          
          {students.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">Noch keine Schüler angelegt</p>
              <button className="btn-primary" onClick={() => setShowNewStudentDialog(true)}>
                Ersten Schüler hinzufügen
              </button>
            </div>
          )}
        </div>
      </div>

      {showNewStudentDialog && (
        <NewStudentDialog 
          onClose={() => setShowNewStudentDialog(false)}
          onStudentAdded={onStudentDeleted}
        />
      )}
    </div>
  );
}

// Komponente für eine Schüler-Karte
function StudentCard({ student, onClick, onDelete }) {
  const progressPercentage = 75; // Placeholder - könnte aus echten Daten berechnet werden

  return (
    <div className="student-card" onClick={onClick}>
      <button className="delete-btn" onClick={onDelete}>
        🗑️
      </button>
      <div className="student-info">
        <div className="student-avatar">
          {student.name.charAt(0).toUpperCase()}
        </div>
        <div className="student-details">
          <div className="student-name">{student.name} {student.surname}</div>
          <div className="student-phone">📱 {student.phone || 'Keine Nummer'}</div>
          <div className="student-date">📅 {formatGermanDate(student.start_date)}</div>
        </div>
      </div>
      <div className="student-progress">{progressPercentage}% abgeschlossen</div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
}

// Komponente für die Schüler-Detailansicht
function StudentDetail({ student, onBack, onToggleTheme, isDarkMode }) {
  if (!student) return null;

  return (
    <div>
      <header className="detail-header">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <h1 className="detail-title">{student.name} {student.surname}</h1>
        <button className="theme-toggle" onClick={onToggleTheme}>
          <span className="icon">{isDarkMode ? '☀️' : '🌙'}</span>
          {isDarkMode ? 'Light' : 'Dark'}
        </button>
      </header>

      <div className="container">
        {/* Persönliche Informationen */}
        <div className="section">
          <div className="section-header">
            <span className="section-icon">👤</span>
            <h2 className="section-title">Persönliche Informationen</h2>
          </div>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-icon">📱</span>
              <span className="info-text">{student.phone || 'Keine Nummer'}</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span className="info-text">{formatFullAddress(student)}</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📅</span>
              <span className="info-text">Beginn: {formatGermanDate(student.start_date)}</span>
            </div>
            <div className="info-item">
              <span className="info-icon">👓</span>
              <span className="info-text">Brille: {student.wears_glasses ? 'Ja' : 'Nein'}</span>
            </div>
          </div>
        </div>

        {/* Ausbildungsfortschritt */}
        <div className="section">
          <div className="section-header">
            <span className="section-icon">📚</span>
            <h2 className="section-title">Theoretische Ausbildung</h2>
          </div>
          <div className="training-progress">
            <div className="progress-circle"></div>
            <div className="progress-text">12/14</div>
            <div className="progress-count">Grundstoff abgeschlossen</div>
          </div>
        </div>

        {/* Praktische Ausbildung */}
        <div className="section">
          <div className="section-header">
            <span className="section-icon">🚗</span>
            <h2 className="section-title">Praktische Ausbildung</h2>
          </div>
          
          <div className="fahrt-section">
            <div className="fahrt-title">Grundausbildung</div>
            <div className="fahrt-buttons">
              {[1,2,3,4,5,6,7,8].map(num => (
                <button key={num} className="circle-btn fill-50" title={`Grundstunde ${num}`}>
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div className="fahrt-section">
            <div className="fahrt-title">Überlandfahrten (5 x 45min)</div>
            <div className="fahrt-buttons">
              {[1,2,3,4,5].map(num => (
                <button key={num} className="circle-btn fill-25" title={`Überlandfahrt ${num}`}>
                  {num}
                </button>
              ))}
              <span className="fahrt-status">(2/5)</span>
            </div>
          </div>

          <div className="fahrt-section">
            <div className="fahrt-title">Autobahnfahrten (4 x 45min)</div>
            <div className="fahrt-buttons">
              {[1,2,3,4].map(num => (
                <button key={num} className="circle-btn fill-0" title={`Autobahnfahrt ${num}`}>
                  {num}
                </button>
              ))}
              <span className="fahrt-status">(0/4)</span>
            </div>
          </div>

          <div className="fahrt-section">
            <div className="fahrt-title">Nachtfahrten (3 x 45min)</div>
            <div className="fahrt-buttons">
              {[1,2,3].map(num => (
                <button key={num} className="circle-btn fill-0" title={`Nachtfahrt ${num}`}>
                  {num}
                </button>
              ))}
              <span className="fahrt-status">(0/3)</span>
            </div>
          </div>
        </div>

        {/* Prüfungen */}
        <div className="section">
          <div className="section-header">
            <span className="section-icon">🎯</span>
            <h2 className="section-title">Prüfungen</h2>
          </div>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-icon">📝</span>
              <span className="info-text">
                Theorieprüfung: {student.theory_exam_date ? 
                  `${formatGermanDate(student.theory_exam_date)} ${student.theory_exam_passed ? '✅' : '❌'}`
                  : 'Noch nicht absolviert'}
              </span>
            </div>
            <div className="info-item">
              <span className="info-icon">🚗</span>
              <span className="info-text">
                Praktische Prüfung: {student.practical_exam_date ? 
                  `${formatGermanDate(student.practical_exam_date)} ${student.practical_exam_passed ? '✅' : '❌'}`
                  : 'Noch nicht absolviert'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dialog für neuen Schüler
function NewStudentDialog({ onClose, onStudentAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    address: '',
    postal_code: '',
    city: '',
    date_of_birth: '',
    start_date: new Date().toISOString().split('T')[0],
    wears_glasses: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.surname.trim()) {
      alert('Vor- und Nachname sind Pflichtfelder!');
      return;
    }

    StorageManager.addStudent(formData);
    onStudentAdded();
    onClose();
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={e => e.stopPropagation()}>
        <h2>Neuer Schüler</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Vorname *</label>
            <input
              type="text"
              value={formData.name}
              onChange={e => handleChange('name', e.target.value)}
              placeholder="z.B. Max"
              required
            />
          </div>
          <div className="form-group">
            <label>Nachname *</label>
            <input
              type="text"
              value={formData.surname}
              onChange={e => handleChange('surname', e.target.value)}
              placeholder="z.B. Mustermann"
              required
            />
          </div>
          <div className="form-group">
            <label>Telefon</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={e => handleChange('phone', e.target.value)}
              placeholder="01234567890"
            />
          </div>
          <div className="form-group">
            <label>Ausbildungsbeginn</label>
            <input
              type="date"
              value={formData.start_date}
              onChange={e => handleChange('start_date', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.wears_glasses}
                onChange={e => handleChange('wears_glasses', e.target.checked)}
              />
              Brillenträger
            </label>
          </div>
          <div className="dialog-buttons">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Abbrechen
            </button>
            <button type="submit" className="btn-primary">
              Schüler hinzufügen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Hilfsfunktionen
function formatGermanDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE');
}

function formatFullAddress(student) {
  let address = student.address || '';
  if (student.postal_code) address += (address ? ', ' : '') + student.postal_code;
  if (student.city) address += (address ? ' ' : '') + student.city;
  return address || 'Keine Adresse';
}

export default App;