import * as repository from '../controller/memberRepository.js'

export const getSignup = async(req,res) =>{
    const memberInfo = req.body
    console.log(memberInfo)
    const result = await repository.getSignup(memberInfo);
    res.json(result)
    res.end();
}