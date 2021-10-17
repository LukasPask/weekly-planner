import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    task_title: {
      type: String,
      required: true,
    },
    task_content: {
      type: String,
      required: true,
    },
    do_before: {
      type: String,
      required: true,
    },
    importance: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model('task', taskSchema);
export default Task;
