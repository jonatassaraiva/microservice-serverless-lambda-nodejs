'use strict';

const dynamoose = require('dynamoose');
const uuidv4 = require('uuid/v4');

const NotesSchema = new dynamoose.Schema({
  userId: {
    type: String,
    hashKey: true
  },
  id: {
    type: String,
    rangeKey: true,
    default: uuidv4
  },
  title: String,
  content: String,
  createdAt: String,
  updatedAt: String
}, { timestamps: true });


module.exports = dynamoose.model('notes', NotesSchema);