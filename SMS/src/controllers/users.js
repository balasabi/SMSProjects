
import db from '../models'

exports.getAllUsers = async (req, res, next) => {
    try {
        let users = await db.User.findAll({})
        res.json({
            status: "success",
            payload: users,
            message: null,
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            payload: {},
            message: "fetching records from user table",
        });
    }
};


exports.addUser = async (req, res, next) => {
    try {
        let { phone, hashedPassword, salt, email, created } = req.body
        let createUser = await db.User.create({
            phone: phone,
            hashedPassword: hashedPassword,
            salt: salt,
            email: email,
            created: Date.now()
        })
        res.json({
            status: "success",
            payload: createUser,
            message: "user created successfully"
        })

    } catch (error) {
        console.log("error=======================>" + error)
        res.status(500).json({
            status: "failed",
            payload: null,
            message: "error while creating records"
        })

    }
}

exports.updateUser = async (req, res, next) => {
    try {
        let { phone, hashedPassword, salt, email, created } = req.body

        let updateUser = await db.User.update({
            phone: phone,
            hashedPassword: hashedPassword,
            salt: salt,
            email: email,
            created: Date.now()
        },
            {
                where: {
                    id: 2
                }
            }
        )

        let user = await db.User.findOne({
            where: {
                id: 2,
            },
        });

        res.json({
            status: "success",
            payload: user,
            message: "user updated successfully"
        })


    } catch (error) {
        res.status(500).json({
            status: "failed",
            payload: null,
            message: "error while updating user"
        })
    }

}


exports.deleteUser = async (req, res, next) => {
    try {
        let deleteUser = await db.User.destroy({
            where: {
                id: 7
            }
        })
        res.json({
            status: "success",
            payload: null,
            message: "user deleted successfully"
        })
    } catch (error) {
        console.log("*************" + error)
        res.json({
            status: "success",
            payload: null,
            message: "error while user delete"
        })
    }
}