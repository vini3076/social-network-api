const { Schema, models } = require("mongoose");
const reactionSchema = require('./Reaction');

function formatDate(date) {
return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
}

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength:1,
      maxlength:280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: formatDate
      },
      username: {
        type: String,
        required: true,
      },
    friends: [reactionSchema]
    ,
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;
