const Bootcamp = require('../models/Bootcamp');

// @desc GET all bootcamps
// @route GET api/v1/bootcamps
// @access public
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ sucess: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ sucess: false });
  }
};

// @desc Get single bootcamps
// @route GET api/v1/bootcamps/:id
// @access public
exports.getBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({ sucess: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ sucess: false });
  }
};

// @desc Create new bootcamps
// @route POST api/v1/bootcamps/
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      sucess: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({ sucess: false });
  }
};

// @desc Update bootcamps
// @route PUT api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!bootcamp) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    return res.status(400).json({ sucess: false });
  }
};

// @desc Delete bootcamp
// @route DELETE api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    return res.status(400).json({ sucess: false });
  }
};
