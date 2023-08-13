const Medicine = require("../models/medicine");
const User = require("../models/user");


module.exports.create = async function (req, res) {
    try {

        const { name, dosage, schedule, notes } = req.body;

        if (!req.user) {
            return res.status(401).json({
                message: 'unable to find user',
                success: false,
            });
        }

        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(401).json({
                message: 'unable to find user',
                success: false,
            });
        }

        const medicine = await Medicine.create({
            name,
            dosage,
            schedule,
            notes,
        })

        user.medicines.push(medicine._id);
        await user.save();

        return res.status(200).json({
            message: 'medicine added successfully',
            success: true,
        })

    } catch (error) {
        console.log(`error in creating medicine`);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
        })
    }

}