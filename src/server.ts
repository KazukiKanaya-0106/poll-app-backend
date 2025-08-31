import app from "./app";
// import { scheduleTopicJob } from "./jobs/topic.job";

const PORT = process.env["PORT"] || 3000;

// scheduleTopicJob()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
