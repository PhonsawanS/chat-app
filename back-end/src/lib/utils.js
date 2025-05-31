import jwt from 'jsonwebtoken'
export const generateToken = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,// ป้องกันไม่ให้ JavaScript ฝั่ง client เข้าถึง cookie นี้ได้
        sameSite: 'strict', // ป้องกัน CSRF
        secure: process.env.NODE_ENV !== 'development'
    });

    return token;
}