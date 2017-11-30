'use strict';

//
// external modules
const Promise = require('bluebird');
const uuidv4 = require('uuid/v4');

// internal modules
const NotesModule = require('./notes.model');
const { ErrorHelper } = require('../helpers');

const _getById = (id, userId, name = 'notesRepository.getById') => {
  return new Promise((resolve, reject) => {
    NotesModule
      .get({ id, userId }, (err, notesInDb) => {
        if (err) {
          return reject(err);
        }

        if (notesInDb) {
          return resolve(notesInDb.attrs);
        }

        const notFound = new ErrorHelper(name, `Note, ${id}, not found.`, 404);
        return reject(notFound);
      });
  });
};

const notesRepository = {
  getById(id, userId) {
    return _getById(id, userId);
  },

  getAllByUser(userId, startEvaluatedKey, limit = 10) {
    return new Promise((resolve, reject) => {
      const queryToExecute = NotesModule
        .query(userId)
        .usingIndex('userId')
        .limit(limit);

      if (startEvaluatedKey) {
        queryToExecute.startKey({ id: startEvaluatedKey, userId });
      }

      queryToExecute.exec((err, notesInDb) => {
        if (err) {
          return reject(err);
        }

        const results = {
          notes: notesInDb.Items,
          limit: parseInt(limit, 10),
          lastEvaluatedKey: notesInDb.LastEvaluatedKey ? notesInDb.LastEvaluatedKey.id : undefined
        };
        return resolve(results);
      });
    });
  },

  create(note, userId) {
    return new Promise((resolve, reject) => {
      note.id = uuidv4();
      note.userId = userId;
      NotesModule.create(note, (err, noteInDb) => {
        if (err) {
          return reject(err);
        }
        return resolve(noteInDb);
      });
    });
  },

  update(note, userId) {
    return new Promise((resolve, reject) => {
      _getById(note.id, userId, 'notesRepository.update')
        .then(noteInDb => {
          const noteAssigned = Object.assign(noteInDb, note);
          NotesModule.update(noteAssigned, (err, noteUpdated) => {
            if (err) {
              return reject(err);
            }

            return resolve(noteUpdated.attrs);
          });
        })
        .catch(err => {
          return reject(err);
        });
    });
  },

  delete(id, userId) {
    return new Promise((resolve, reject) => {
      _getById(id, userId, 'notesRepository.delete')
        .then(noteInDb => {
          NotesModule.destroy(id, userId, (err) => {
            if (err) {
              return reject(err);
            }

            return resolve(noteInDb);
          });
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
};

module.exports = notesRepository;