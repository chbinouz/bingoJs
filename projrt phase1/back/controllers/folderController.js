const Folder = require('./../models/folder')

module.exports.createOne = async (req, res) => {
    try {
        const response = await Folder.create({ ...req.body })
        res.status('201').send(response)
    } catch (error) {
        res.status(501).send({
            message: error.message,
        })
        console.error(error)
    }
}
module.exports.getOne = async (req, res) => {
    try {
        await Folder.findOne({ _id: req.params.id }).exec((err, succ) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: err.message
                })
            } else {
                res.status(200).send({
                    success: true,
                    message: succ
                })
            }
        })
    } catch (error) {
        res.status(501).send({
            message: error.message,
        })
        console.error(error)
    }
}
module.exports.list = async (req, res) => {
    try {
        await Folder.find().exec((err, succ) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: err.message
                })
            } else {
                res.status(200).send({
                    success: true,
                    message: succ
                })
            }
        })
    } catch (error) {
        res.status(501).send({
            message: error.message,
        })
        console.error(error)
    }
}