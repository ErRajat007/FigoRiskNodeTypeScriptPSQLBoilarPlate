import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

const assetTypeValue = [
    'Application',
    'Infrastructure',
    'People',
    'Process',
] as const;
const publicFacingValue = ['Yes', 'No'] as const;
const loginSchema = z.object({
    assetName: z.string({
        required_error: 'Please provide assetName',
        invalid_type_error: 'Asset Name must be a string',
    }),
    assetGroup: z.string({
        required_error: 'Please provide assetGroup',
        invalid_type_error: 'Asset Group must be a string',
    }).refine(
        (val) => val.length > 1 && val != '',
        () => ({ message: `Provide valid Asset Group` })
      ),
    assetId: z.number({
        required_error: 'Please provide assetId',
        invalid_type_error: 'Asset id must be a number',
    }),
    description: z.string({
        required_error: 'Please provide description',
        invalid_type_error: 'description must be a string',
    }).refine(
        (val) => val.length > 1 && val != '',
        () => ({ message: `Provide valid Description` })
      ),
    assetType: z
        .enum(assetTypeValue, {
            invalid_type_error: 'Invalid select ',
        })
        .optional(),
    entity: z.number({
        required_error: 'Please provide Entity Id',
    }),
    businessUnit: z.number({
        required_error: 'Please provide BusinessUnit Id',
    }),
    department: z.number({
        required_error: 'Please provide Department Id',
    }),
    assetOwner: z.string({
        required_error: 'Please provide AssetOwner',
    }).refine(
        (val) => val.length > 1 && val != '',
        () => ({ message: `Provide valid Asset Owner` })
      ),
    publicFacing: z
        .enum(publicFacingValue, {
            required_error: 'Please provide PublicFacing',
        })
        .optional(),
});

const validationAddAssetData = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        loginSchema.parse(req.body);
        next();
    } catch (err: any) {
        res.status(400).send({ success: false, message: err.issues[0].message });
    }
};

export default validationAddAssetData;
