'use strict';

import mongoose from 'mongoose';

var CategorySchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Category', CategorySchema);
