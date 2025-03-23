import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ msg: "Not Authorized.Please login again" })
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id
        }
        else {
            return res.status(401).json({ msg: "Not Authorized.Please login again krlo" })
        }
        next();
    } catch (e) {
        return res.status(500).json({ msg: e.message })
    }
}

export default userAuth;