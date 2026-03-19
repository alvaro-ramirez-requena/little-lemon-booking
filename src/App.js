import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.date) newErrors.date = "Date is required";
    if (!form.time) newErrors.time = "Time is required";
    if (!form.guests || form.guests <= 0)
      newErrors.guests = "Guests must be more than 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <main style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      
      <header>
        <h1>Little Lemon Booking</h1>
      </header>

      {submitted && <p>Booking successful!</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        {errors.date && <p aria-live="polite">{errors.date}</p>}

        <label htmlFor="time">Time</label>
        <select
          id="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        >
          <option value="">Select time</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
        </select>
        {errors.time && <p aria-live="polite">{errors.time}</p>}

        <label htmlFor="guests">Guests</label>
        <input
          id="guests"
          type="number"
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
        />
        {errors.guests && <p aria-live="polite">{errors.guests}</p>}

        <button type="submit">Book Now</button>
      </form>
    </main>
  );
}

export default App;