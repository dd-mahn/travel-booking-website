import Subscribe from '../models/Subscribe.js'

export const postSubscribe = async (req,res) => {
    const newSubscribe = new Subscribe(req.body)

    try {
        const savedSubscribe = await newSubscribe.save()

        res.status(200).json({success:true, message:'Subscribe successfully!', data:savedSubscribe})

    } catch (error) {
        res.status(500).json({success:false, message:'Failed to send. Try again!'})

    }
}