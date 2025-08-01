import sql from "../configs/db.js";


export const getUserCreations = async (req, res)=>{
    try {
        const{userId} = req.auth()

        const creations = await sql`SELECT * FROM creations
        WHERE user_id = ${userId}
        ORDER BY created_at DESC`;

         res.json({success: true, creations });
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const getPublishCreations = async (req, res)=>{
    try {
        
        const creations = await sql`SELECT * FROM creations
        WHERE publish = true
        ORDER BY created_at DESC`;

         res.json({success: true, creations });
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

export const toggleLikeCreation = async (req, res) => {
  try {
    const { userId } = req.auth;
    const { id } = req.body;

    const [creation] = await sql`SELECT * FROM creations WHERE id = ${id}`;
    if (!creation) {
      return res.json({ success: false, message: 'Creation not found' });
    }

    const currentLikes = creation.likes || [];
    const userIdStr = userId.toString();

    let updatedLikes, message;

    if (currentLikes.includes(userIdStr)) {
      updatedLikes = currentLikes.filter(user => user !== userIdStr);
      message = 'Like removed';
    } else {
      updatedLikes = [...currentLikes, userIdStr];
      message = 'Like added';
    }

    const formattedArray = `{${updatedLikes.map(u => `"${u}"`).join(',')}}`;

    await sql`UPDATE creations SET likes = ${formattedArray}::text[] WHERE id = ${id}`;

    res.json({ success: true, message, likes: updatedLikes });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
