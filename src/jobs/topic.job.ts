import schedule from "node-schedule";
import { closeTopic, getTopicDraft, setTopic } from "../services/topic.service";
import { TopicDraft } from "../schemas/topic.schema";

const OPEN_TOPIC_WINDOW_MS = Number(process.env["OPEN_TOPIC_WINDOW_MS"] || 5 * 60 * 1000);

export const scheduleTopicJob = () => {
  // 毎日0時0分0秒に1回だけ実行
  schedule.scheduleJob("0 0 0 * * *", () => {
    console.log("Running scheduler: decide today's topic time");
    scheduleTopicLifecycleJob();
  });
};

const scheduleTopicLifecycleJob = async () => {
  const topicDraft: TopicDraft = await getTopicDraft();
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);

  const cron = `${second} ${minute} ${hour} * * *`;
  console.log(`Today's topic will run at ${hour}:${minute}:${second} (${cron})`);

  schedule.scheduleJob(cron, async () => {
    console.log(`Running generated topic job at ${hour}:${minute}:${second}`);
    const topic = await setTopic(topicDraft);
    const openedAt = new Date();
    console.log(`Today's topic set: ${topic.title}`);

    const closeAt = new Date(openedAt.getTime() + OPEN_TOPIC_WINDOW_MS);
    console.log(`Topic ${topic.id} will close at ${closeAt.toISOString()}`);

    schedule.scheduleJob(closeAt, async () => {
      closeTopic(topic.id);
      console.log(`Topic ${topic.id} closed at ${new Date().toISOString()}`);
    });
  });
};

// export const scheduleTopicJob = () => {
//   schedule.scheduleJob("*/10 * * * * *", async () => {
//     const topicDraft = await getTopicDraft();
//     const topic = await setTopic(topicDraft);
//     console.log(`Today's topic set: ${topic.title}`);
//   });
// };
