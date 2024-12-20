import express from "express"
import {Sequelize, DataTypes} from "sequelize"
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '.database.sqlite'
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

async function database () {
    await sequelize.sync();
    await User.bulkCreate([
        {username: 'admin1', password: 'password1'},
        {username: 'admin2', password: 'password2'}
    ])
};

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({where: {username, password}});
        if(user){
            res.json({succes: true, username: user.username})
        } else {
            res.status(401).json({succes:false, message: 'Invalid credential'})
        }
    } catch (error) {
        res.status(500).json({succes: false, message: 'Server error'})
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    database()
})
