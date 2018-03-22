'use strict';

const NotesModel = require('./model');
const { ErrorHelper } = require('./helpers');

const _getByUserAndId = (userId, id) => {
  return NotesModel.get({ userId, id })
    .then(noteResult => {
      if (noteResult) {
        const { id, title, content, createdAt, updatedAt } = noteResult;
        return Promise.resolve({ id, title, content, createdAt, updatedAt });
      }

      return Promise.reject(new ErrorHelper('Notes not found', 404, 'note'));
    });
};

const repository = {
  getByUserAndId(userId, id) {
    return _getByUserAndId(userId, id);
  },

  getAllByUser(userId) {
    return NotesModel.query({ userId })
      .exec()
      .then(notesResult => {
        if (notesResult) {
          const notesToResponse = notesResult.map(noteResult => {
            const { id, title, content, createdAt, updatedAt } = noteResult;
            return { id, title, content, createdAt, updatedAt };
          });
          return Promise.resolve(notesToResponse);
        }

        return Promise.resolve([]);
      });
  },

  create(userId, note) {
    const { title, content } = note;
    return NotesModel.create({ userId, title, content })
      .then(noteCreated => {
        const { id, title, content, createdAt, updatedAt } = noteCreated;
        return Promise.resolve({ id, title, content, createdAt, updatedAt });
      });
  },

  update(userId, id, note) {
    return _getByUserAndId(userId, id)
      .then(() => {
        const { title, content } = note;
        return NotesModel.update({ userId, id }, { title, content })
          .then(noteUpdated => {
            const { id, title, content, createdAt, updatedAt } = noteUpdated;
            return Promise.resolve({ id, title, content, createdAt, updatedAt });
          });
      });
  },

  delete(userId, id) {
    return _getByUserAndId(userId, id)
      .then(noteResult => {
        return NotesModel.delete({ userId, id })
          .then(() => {
            return Promise.resolve(noteResult);
          });
      });
  }
};

module.exports = repository;