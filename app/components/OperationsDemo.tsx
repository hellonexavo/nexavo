"use client";
import { useEffect, useRef, useState } from "react";
import s from "../studio.module.css";
type Job = {
  id: number;
  title: string;
  client: string;
  owner: string;
  value: number;
  status: number;
};
const initialJobs: Job[] = [
  {
    id: 104,
    title: "Kitchen tap replacement",
    client: "Alex · Amsterdam",
    owner: "Sam",
    value: 145,
    status: 0,
  },
  {
    id: 103,
    title: "Interior painting",
    client: "Robin · Haarlem",
    owner: "Jamie",
    value: 680,
    status: 1,
  },
  {
    id: 102,
    title: "Door adjustment",
    client: "Charlie · Utrecht",
    owner: "Sam",
    value: 95,
    status: 2,
  },
  {
    id: 101,
    title: "Bathroom seal repair",
    client: "Taylor · Amsterdam",
    owner: "Jamie",
    value: 180,
    status: 3,
  },
];
const statuses = ["New enquiry", "Scheduled", "In progress", "Completed"];
const tabs = [
  { id: "jobs", label: "01 / Job management" },
  { id: "booking", label: "02 / Booking journey" },
  { id: "automation", label: "03 / Automation" },
];
export default function OperationsDemo() {
  const [tab, setTab] = useState("jobs");
  const [jobs, setJobs] = useState(initialJobs);
  const [filter, setFilter] = useState("all");
  const [service, setService] = useState("Home repair visit");
  const [day, setDay] = useState("Monday");
  const [slot, setSlot] = useState("09:00");
  const [preview, setPreview] = useState(false);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [notice, setNotice] = useState(
    "Sample workspace ready. Try moving a job to its next stage.",
  );
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const runningRef = useRef(false);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  function reset() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    runningRef.current = false;
    setRunning(false);
    setStep(0);
    setJobs(initialJobs);
    setFilter("all");
    setService("Home repair visit");
    setDay("Monday");
    setSlot("09:00");
    setPreview(false);
    setNotice("Demo reset. All sample jobs restored.");
  }
  function addJob() {
    setJobs((current) => [
      {
        id: Math.max(...current.map((j) => j.id)) + 1,
        title: "New sample service request",
        client: "Demo customer · Rotterdam",
        owner: "Unassigned",
        value: 120,
        status: 0,
      },
      ...current,
    ]);
    setFilter("all");
    setNotice(
      "Sample request added to New enquiry. No real customer or notification was created.",
    );
  }
  function advance(id: number) {
    setJobs((current) =>
      current.map((job) =>
        job.id === id ? { ...job, status: Math.min(3, job.status + 1) } : job,
      ),
    );
    setNotice(`Sample job #${id} moved to its next stage.`);
  }
  function run() {
    if (runningRef.current) return;
    runningRef.current = true;
    setRunning(true);
    setStep(0);
    timers.current.forEach(clearTimeout);
    timers.current = [1, 2, 3, 4].map((n) =>
      setTimeout(() => {
        setStep(n);
        if (n === 4) {
          setRunning(false);
          runningRef.current = false;
        }
      }, n * 650),
    );
  }
  const visible = jobs.filter(
    (job) => filter === "all" || String(job.status) === filter,
  );
  return (
    <div className={s.demoShell}>
      <div
        className={s.demoTabs}
        role="group"
        aria-label="Choose a demonstration"
      >
        {tabs.map((item) => (
          <button
            key={item.id}
            aria-pressed={tab === item.id}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={s.demoWorkspace}>
        <div className={s.workspaceHead}>
          <div>
            <span className={s.workspaceIcon}>
              Y<span>↗</span>
            </span>
            <div>
              <strong>
                {tab === "jobs"
                  ? "ServiceFlow"
                  : tab === "booking"
                    ? "Booking Studio"
                    : "Workflow Studio"}
              </strong>
              <p>Interactive concept by YY Builds</p>
            </div>
          </div>
          <button className={s.resetButton} onClick={reset}>
            ↻ Reset demo
          </button>
        </div>
        <p className={s.demoNotice}>
          <span>DEMO</span> Fictional data. Changes stay in this page session.
          No messages, bookings or payments are sent.
        </p>
        {tab === "jobs" && (
          <div>
            <div className={s.metrics}>
              <div>
                <span>Open jobs</span>
                <strong>
                  {jobs
                    .filter((j) => j.status !== 3)
                    .length.toString()
                    .padStart(2, "0")}
                </strong>
              </div>
              <div>
                <span>To follow up</span>
                <strong>
                  {jobs
                    .filter((j) => j.status === 0)
                    .length.toString()
                    .padStart(2, "0")}
                </strong>
              </div>
              <div>
                <span>Estimated open value</span>
                <strong>
                  €
                  {jobs
                    .filter((j) => j.status !== 3)
                    .reduce((n, j) => n + j.value, 0)
                    .toLocaleString("en-IE")}
                </strong>
              </div>
              <div>
                <span>Completed jobs</span>
                <strong>
                  {jobs
                    .filter((j) => j.status === 3)
                    .length.toString()
                    .padStart(2, "0")}
                </strong>
              </div>
            </div>
            <div className={s.boardToolbar}>
              <div>
                <h3>Your jobs, in one place.</h3>
                <p>Click a job’s action to move it forward.</p>
              </div>
              <button
                className={s.darkButton}
                disabled={jobs.length >= 12}
                onClick={addJob}
              >
                + Add sample request
              </button>
            </div>
            <div className={s.filterBar} aria-label="Filter jobs">
              {["All jobs", ...statuses].map((name, i) => (
                <button
                  key={name}
                  aria-pressed={filter === (i === 0 ? "all" : String(i - 1))}
                  onClick={() => setFilter(i === 0 ? "all" : String(i - 1))}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className={s.board}>
              {statuses.map((status, index) => (
                <section className={s.boardColumn} key={status}>
                  <h4>
                    <span className={`${s.statusDot} ${s[`status${index}`]}`} />
                    {status}
                    <small>
                      {visible.filter((j) => j.status === index).length}
                    </small>
                  </h4>
                  {visible
                    .filter((j) => j.status === index)
                    .map((job) => (
                      <div className={s.jobCard} key={job.id}>
                        <div className={s.jobMeta}>
                          <span>JOB #{job.id}</span>
                          <span>↗</span>
                        </div>
                        <h5>{job.title}</h5>
                        <p>{job.client}</p>
                        <div className={s.jobBottom}>
                          <span className={s.avatar}>
                            {job.owner.slice(0, 1)}
                          </span>
                          <span>{job.owner}</span>
                          <strong>€{job.value}</strong>
                        </div>
                        {index < 3 ? (
                          <button onClick={() => advance(job.id)}>
                            Move to {statuses[index + 1].toLowerCase()} →
                          </button>
                        ) : (
                          <span className={s.completed}>✓ Work completed</span>
                        )}
                      </div>
                    ))}
                  {!visible.some((j) => j.status === index) && (
                    <p className={s.emptyColumn}>No matching jobs</p>
                  )}
                </section>
              ))}
            </div>
            <p role="status" className={s.demoStatus}>
              {notice}
            </p>
          </div>
        )}
        {tab === "booking" && (
          <div className={s.bookingDemo}>
            <div>
              <p className={s.eyebrow}>A CLEAR CUSTOMER JOURNEY</p>
              <h3>
                From service
                <br />
                to next step.
              </h3>
              <p>
                Show customers what to choose and what happens next. Your real
                calendar and notifications can be connected after scoping.
              </p>
              <ul>
                <li>✓ Service and time selection</li>
                <li>✓ A clear request summary</li>
                <li>✓ Human confirmation where needed</li>
              </ul>
              <a className={s.inlineLink} href="/booking-template">
                Explore the full booking concept ↗
              </a>
            </div>
            <form
              className={s.bookingForm}
              onSubmit={(event) => {
                event.preventDefault();
                setPreview(true);
              }}
            >
              <label>
                1. Choose a service
                <select
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    setPreview(false);
                  }}
                >
                  <option>Home repair visit</option>
                  <option>Cleaning consultation</option>
                  <option>Workshop inspection</option>
                </select>
              </label>
              <label>
                2. Example day
                <select
                  value={day}
                  onChange={(e) => {
                    setDay(e.target.value);
                    setPreview(false);
                  }}
                >
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                    (d) => (
                      <option key={d}>{d}</option>
                    ),
                  )}
                </select>
              </label>
              <fieldset>
                <legend>3. Example time</legend>
                <div className={s.timeSlots}>
                  {["09:00", "10:30", "13:00", "15:30"].map((t) => (
                    <button
                      type="button"
                      aria-pressed={slot === t}
                      onClick={() => {
                        setSlot(t);
                        setPreview(false);
                      }}
                      key={t}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>
              <button className={s.darkButton} type="submit">
                Preview request <span>↗</span>
              </button>
              {preview && (
                <div role="status" className={s.bookingSummary}>
                  <strong>Example request summary</strong>
                  <p>
                    {service} · {day} · {slot}
                  </p>
                  <p>
                    This is a preview only. No appointment has been reserved.
                  </p>
                </div>
              )}
            </form>
          </div>
        )}
        {tab === "automation" && (
          <div className={s.automationDemo}>
            <div className={s.boardToolbar}>
              <div>
                <p className={s.eyebrow}>FROM ENQUIRY TO ACTION</p>
                <h3>
                  A small workflow.
                  <br />A clearer working day.
                </h3>
                <p>Run a local simulation of a service enquiry.</p>
              </div>
              <button className={s.darkButton} disabled={running} onClick={run}>
                {running
                  ? "Simulating…"
                  : step === 4
                    ? "Run again ↻"
                    : "Run sample workflow ↗"}
              </button>
            </div>
            <div className={s.flowSteps}>
              {[
                {
                  title: "Enquiry received",
                  text: "A customer describes a repair through your website.",
                },
                {
                  title: "Details organised",
                  text: "The request is structured into service, location and priority.",
                },
                {
                  title: "Job added to CRM",
                  text: "The team has an owner, a status and a next action.",
                },
                {
                  title: "Notification prepared",
                  text: "A message is ready for the responsible team member.",
                },
              ].map((item, i) => (
                <div
                  className={step > i ? s.flowDone : s.flowWaiting}
                  key={item.title}
                >
                  <span>{step > i ? "✓" : `0${i + 1}`}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <small>{step > i ? "Simulated" : "Waiting"}</small>
                </div>
              ))}
            </div>
            <p className={s.demoStatus} role="status">
              {running
                ? `Simulating step ${Math.min(step + 1, 4)} of 4.`
                : step === 4
                  ? "Simulation complete. No external services were contacted or notifications sent."
                  : "Connect real services only after agreeing access, data handling and error recovery."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
