import { Router } from "express";
import { GrowdeverController } from "../controller/growdever";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const { nome, idade, cidade } = req.body;

        const count = await new GrowdeverController().create(
            nome,
            idade,
            cidade
        );

        return res.send({
            message: "Criado com sucesso",
            data: count,
        });
    } catch (err) {
        return res.status(500).send({
            message: "Erro na criação",
            data: err,
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const lista = await new GrowdeverController().list();

        return res.send({
            message: "Listado com sucesso",
            data: lista,
        });
    } catch (err) {
        return res.status(500).send({
            message: "Erro na listagem",
            data: err,
        });
    }
});

router.put("/", async (req, res) => {
    try {
        const { id, idade, cidade } = req.body;
        const result = await new GrowdeverController().update(
            id,
            idade,
            cidade
        );

        return res.send({
            message: "Atualizado com sucesso",
            data: result,
            teste: 1,
        });
    } catch (err) {
        return res.status(500).send({
            message: "Erro na atualização",
            data: err,
        });
    }
});

export default router;
