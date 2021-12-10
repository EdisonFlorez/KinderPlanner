const activityCtr = {};
const Activity = require("../models/activity.model");

activityCtr.create = async(req, res) => {
    const body = req.body;
    try {
        const activityDB = await Activity.create(body)
        res.json(activityDB);
    } catch (error) {
        res.status(500).json({
            message: "Ocurrió un error",
            error
        })
    }
};
activityCtr.getActivities = async(req, res) =>{
   try {
       const activityDB = await Activity.find();
       res.json(activityDB);
       
   } catch (error) {
       res.json({
           message: "Ocurrió un error",
           error
       })
   }
};
activityCtr.getOne = async(req, res) => {
    const _id = req.params.id;
    try {
        const activityDB = await Activity.finOne({_id});
        res.json(activityDB);
        
    } catch (error) {
        res.status(500).json({
            message: "Ocurrió un error",
            error
        })
    }
};
activityCtr.update = async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const activityDB =  Activity.findByIdAndUpdate(_id, body, {
            new: true,
          })
          res.json(activityDB);
    } catch (error) {
        res.status(500).json({
            message: "Ocurrió un error",
            error
        })
    }
};
activityCtr.delete = async(req, res) => {
    const _id = req.params.id;
    try {
        const activityDB = Activity.findByIdAndDelete({_id});
        if(activityDB){
            return res.status(400).json({
                mesagge: "No se encontró el id indicado",
                error,
              });
        }
    } catch (error) {
        res.status(500).json({
            message: "Ocurrió un error",
            error
        })
    }
};

module.exports = activityCtr;