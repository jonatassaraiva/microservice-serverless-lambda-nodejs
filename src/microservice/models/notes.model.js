'use strict';

const dynamo = require('dynamodb');
const Joi = require('joi');

const NotesModel = dynamo.define('NotesModel', {
  tableName: 'notes',
  hashKey: 'id',
  rangeKey: 'userId',
  timestamps: true,

  schema: {
    id: Joi.string(),
    userId: Joi.string(),
    title: Joi.string(),
    content: Joi.string()
  },
  indexes: [{
    hashKey: 'userId', name: 'userId', type: 'global'
  }]
});

module.exports = NotesModel;