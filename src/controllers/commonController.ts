import { Request, Response } from 'express';
import { AssetModel } from '../database/sequelize/assetModel';
import { EntityModel } from '../database/sequelize/entityModel';


const addAssetController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const check = await AssetModel.findOne({
            where: { assetName: data.assetName },
        });
        if (check == null) {
            const asset = await AssetModel.create({
                assetName: data.assetName,
                assetGroup: data.assetGroup,
                assetId: data.assetId,
                description: data.description,
                assetType: data.assetType,
                assetOwner: data.assetOwner,
                publicFacing: data.publicFacing,
                entity: data.entity,
                businessUnit: data.businessUnit,
                department: data.department,
                entityId:data.entity
            });
            res.status(201).json({ success: true, message: 'Asset created', asset });
        } else {
            res.status(400).json({
                    success: false,
                    message: 'Asset Name already exists',
                    error: 'errr',
                });
        }
    } catch (err: any) {
        // console.log(err)
        res.status(400).json({ success: false, message: 'Failed to create Asset', error: err });
    }
};

const getAssetDetailsController = async (req: Request, res: Response) => {
    try {
        const assetId = req.query.assetId; // Assuming the doctor code is passed in the URL parameter
        console.log("doctorCode>>" + assetId)
        
        const details = await AssetModel.findOne({ 
            where: { id: assetId },
             include: {model:EntityModel,as:'entity_details'},
         });
        if (details) {

            res.status(200).json({ success: true,data:details, message: 'Asset details' });
        } else {
            res.status(404).json({ success: false, message: 'Asset details not found' });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ success: false, message: err });
    }
};

// const updateDoctorSchedule = async (req: Request, res: Response) => {
//     try {
//         const data = req.body

//         // const time = moment().format("YYYY-MM-DD h:mm");
//         // return res.json(time)

//         const doctor = await DoctorModel.findOne({ where: { doctor_code: data.doctor_code } })
//         if (doctor) {
//             doctor.available_from = data.available_from
//             doctor.available_till = data.available_till
//             doctor.save();
//             res.status(201).json({ success: true, message: 'Doctor Schedule has been updated', });
//         } else {
//             res.status(400).json({ success: false, message: 'doctor code has been not matched' });
//         }

//     } catch (err) {
//         console.error('Error:', err);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// };

// const updatedoctoreDetailsController = async (req: Request, res: Response) => {
//     try {

//         const doctor_code = req.query
//         const doctor = await DoctorModel.findOne({ where: { doctor_code: doctor_code.doctor_code } });
//         if (!doctor) {
//             return res.status(404).json({ success: false, message: 'Doctor not found' });
//         }

//         const updatedDoctorData = req.body;
//         await doctor.update(updatedDoctorData);
//         return res.status(200).json({ success: true, message: 'Doctor details updated successfully' });

//     } catch (error) {

//         console.log('Error ', error);
//         res.status(500).send({ success: false, message: 'Internal server error' });
//     }
// };

// const deleteDoctorDetailsController = async (req: Request, res: Response) => {
//     try {
//         const doctorCode = req.query.doctorCode; // Assuming the doctor code is passed in the URL parameter
//         console.log("doctorCode>>" + doctorCode)
//         const doctor = await DoctorModel.findOne({ where: { doctor_code: doctorCode } });
//         // console.log(doctor)
//         if (doctor) {
//             await doctor.destroy();

//             res.status(200).json({ success: true, message: 'Doctor details deleted successfully' });
//         } else {
//             res.status(404).json({ success: false, message: 'Doctor not found' });
//         }
//     } catch (err) {
//         console.error('Error:', err);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// };



export { addAssetController ,getAssetDetailsController};
