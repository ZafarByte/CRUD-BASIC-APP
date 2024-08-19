const zod = reuire('zod');
const Createtodo=zod.object({
title:zod.string(),
description:zod.string()
})

const updatetodo=zod.object({
    id:zod.string(),
})

module.exports={
    Createtodo:Createtodo,
    updatetodo:updatetodo
}