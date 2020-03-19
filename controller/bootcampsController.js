// @desc GET all bootcamps
// @route GET api/v1/bootcamps
// @access public
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: 'show all bootcamps' });
};

// @desc Get single bootcamps
// @route GET api/v1/bootcamps/:id
// @access public
exports.getBootCamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: 'Get a bootcamp' });
};

// @desc Create new bootcamps
// @route POST api/v1/bootcamps/
// @access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: 'create new bootcamps' });
};

// @desc Update bootcamps
// @route PUT api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `update bootcamps ${req.params.id}` });
};

// @desc Delete bootcamp
// @route DELETE api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `delete bootcamps ${req.params.id}` });
};
