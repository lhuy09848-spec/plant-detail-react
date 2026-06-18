import { useState, useContext, useReducer, useEffect, useMemo, useCallback } from "react";
import { ThemeContext } from "../context/ThemeContext";

/* ================= REDUCER ================= */

const studentReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];

    case "DELETE_STUDENT":
      return state.filter((s) => s.id !== action.payload);

    case "UPDATE_STUDENT":
      return state.map((s) =>
        s.id === action.payload.id ? action.payload : s
      );

    default:
      return state;
  }
};

/* ================= COMPONENT ================= */

const StudentManagement = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  /* ===== Load from localStorage ===== */
  const initStudents = () => {
    const data = localStorage.getItem("students");
    return data ? JSON.parse(data) : [];
  };

  const [students, dispatch] = useReducer(studentReducer, [], initStudents);

  /* ===== Form states ===== */
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");

  /* ===== Edit state ===== */
  const [editingId, setEditingId] = useState(null);

  /* ===== Search & Filter ===== */
  const [search, setSearch] = useState("");
  const [majorFilter, setMajorFilter] = useState("All Majors");

  /* ================= useEffect ================= */

  // Save students whenever list changes
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  /* ================= useCallback ================= */

  const handleAddOrUpdate = useCallback(() => {
    if (!name || !age || !major) return;

    if (editingId) {
      dispatch({
        type: "UPDATE_STUDENT",
        payload: { id: editingId, name, age, major },
      });
      setEditingId(null);
    } else {
      dispatch({
        type: "ADD_STUDENT",
        payload: {
          id: Date.now(), // unique ID
          name,
          age,
          major,
        },
      });
    }

    setName("");
    setAge("");
    setMajor("");
  }, [name, age, major, editingId]);

  const handleDelete = useCallback((id) => {
    dispatch({ type: "DELETE_STUDENT", payload: id });
  }, []);

  const handleEdit = useCallback((student) => {
    setEditingId(student.id);
    setName(student.name);
    setAge(student.age);
    setMajor(student.major);
  }, []);

  /* ================= useMemo ================= */

  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchName = s.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchMajor =
        majorFilter === "All Majors" || s.major === majorFilter;

      return matchName && matchMajor;
    });
  }, [students, search, majorFilter]);

  /* ================= UI ================= */

  return (
    <div className={`container ${theme}`}>
      <h2>Student Management </h2>

      <button onClick={toggleTheme}>
    {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* ===== FORM ===== */}
      <h3>{editingId ? "Edit Student" : "Add Student"}</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        placeholder="Major"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
      />

      <button onClick={handleAddOrUpdate}>
        {editingId ? "Update" : "Add Student"}
      </button>

      {/* ===== SEARCH & FILTER ===== */}
      <h3>Search & Filter</h3>

      <input
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={majorFilter}
        onChange={(e) => setMajorFilter(e.target.value)}
      >
        <option>All Majors</option>
        <option>Information Technology</option>
        <option>Business Administration</option>
        <option>Marketing</option>
        <option>Software Engineering</option>
      </select>

      
      {/* ===== TABLE ===== */}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Major</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.major}</td>
              <td>
                <button onClick={() => handleEdit(s)}>Edit</button>
                <button onClick={() => handleDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      {/* ===== TOTAL ===== */}
      <p>Total Students: {filteredStudents.length}</p>
    </div>
    
  );
  
};

export default StudentManagement;