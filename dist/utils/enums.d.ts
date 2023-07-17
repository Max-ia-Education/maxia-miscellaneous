export declare const enums: {
    'pt-BR': {
        pessoa: {
            tipo_pessoa: {
                fisica: string;
                juridica: string;
            };
            sexo: {
                masculino: string;
                feminino: string;
                sexo_ignorado: string;
            };
            estado_civis: {
                solteiro: string;
                casado: string;
                divorciado: string;
                viuvo: string;
                separado_judicialmente: string;
                uniao_estavel: string;
                ignorado: string;
                outros: string;
            };
            cor_pele: {
                branca: string;
                clara: string;
                morena: string;
                parda: string;
                preta: string;
            };
            eleitor: {
                n_c: string;
            };
            tipo_material: {
                tipo_material_7v: string;
                tipo_material_14v: string;
                tipo_material_instensivo: string;
            };
            perfil_comportamental: {
                estrategico: string;
                logico: string;
                lider: string;
                inovador: string;
                mediador: string;
                executor: string;
                aventureiro: string;
                empreendedor: string;
            };
        };
        banco_questao: {
            nivel_dificuldade: {
                baixa: string;
                media: string;
                alta: string;
            };
            gabarito: {
                opcao_a: string;
                opcao_b: string;
                opcao_c: string;
                opcao_d: string;
                opcao_e: string;
            };
            qtde_itens_resposta: {
                a_b_c_d_e: string;
                a_b_c_d: string;
            };
            status: {
                ativa: string;
                revisao: string;
                aprovada: string;
                inativa: string;
            };
            tipo: {
                comun: string;
                com_lacunas: string;
                analise_afirmativas: string;
                associacao: string;
            };
            formato: {
                objetiva: string;
                subjetiva: string;
            };
        };
        contrato_venda: {
            status: {
                ativo: string;
                inativo: string;
            };
            periodicidade: {
                tres_anos: string;
                quatro_anos: string;
                cinco_anos: string;
                um_ano: string;
            };
            tipo_operacao: {
                tipo_operacao_venda: string;
                tipo_operacao_prospeccao: string;
            };
        };
        contrato_venda_ano_letivo_etapas: {
            tipo: {
                medial_anual: string;
                recuperacao: string;
            };
        };
        turma: {
            turno: {
                manha: string;
                tarde: string;
                noite: string;
                integral: string;
            };
        };
        turma_aluno: {
            status: {
                ativo: string;
                transferido: string;
                inativo: string;
            };
            lingua_estrangeira: {
                turma_aluno_ingles: string;
                turma_aluno_espanhol: string;
            };
        };
        turma_avaliacao: {
            modelo: {
                padrao: string;
                enem: string;
                sondagem: string;
            };
            status: {
                aguardando_anexo: string;
                aguardando_processamento: string;
                processando_cartao_resposta: string;
                processando_resultado: string;
                gerando_plano_acao_aluno: string;
                gerando_plano_acao_professor: string;
                concluido: string;
                falhou: string;
                liberado: string;
                nao_aplicar: string;
            };
            status_geracao_pdf_diagramado: {
                pendente: string;
                em_processamento: string;
                gerado: string;
                falha: string;
            };
        };
        turma_avaliacao_questao: {
            tipo: {
                padrao: string;
                desafio: string;
                extra: string;
            };
        };
        turma_avaliacao_aluno: {
            lingua_estrangeira: {
                turma_avaliacao_aluno_ingles: string;
                turma_avaliacao_aluno_espanhol: string;
            };
            nota_redacao_fundamental_1: {
                em_desenvolvimento: string;
                esperado: string;
                superado: string;
                fuga_tema: string;
            };
        };
        user: {
            sexo: {
                masculino: string;
                feminino: string;
                sexo_ignorado: string;
            };
            perfil: {
                gestao_vida: string;
                aluno: string;
                professor: string;
                gestao_escola: string;
                pais: string;
                vendedor: string;
                diretor: string;
                coordenador: string;
                supervisor: string;
                apresentacao: string;
                escola_online: string;
                ecommerce: string;
                admin: string;
                psicologo: string;
                prospeccao: string;
            };
        };
        turma_professor: {
            status: {
                ativo: string;
                inativo: string;
            };
        };
        avaliacao_conhecimento: {
            modelo: {
                enem: string;
                ime: string;
                ita: string;
                uece: string;
                unicamp: string;
                unifor: string;
                usp: string;
                sondagem: string;
                avaliacao_simples: string;
                gestao: string;
                avaliacao_inteligente: string;
            };
            situacao: {
                pendente: string;
                liberada_escola: string;
                aplicada: string;
                liberada_gestao_escola: string;
                liberada_pais: string;
                falhou: string;
            };
            etapa: {
                etapa1: string;
                etapa2: string;
                etapa3: string;
                etapa4: string;
                recuperacao: string;
            };
            abrangencia: {
                abrangencia_sistema_vida: string;
                abrangencia_restrita: string;
            };
            qtde_itens_resposta: {
                a_b_c_d_e: string;
                a_b_c_d: string;
            };
            qtde_itens_plano_acao: {
                pa_a_b_c_d_e: string;
                pa_a_b_c_d: string;
            };
            versao: {
                versao_1: string;
                versao_2: string;
            };
            dia_aplicacao_linguagem: {
                dia_aplicacao_linguagem_1_dia: string;
                dia_aplicacao_linguagem_2_dia: string;
                dia_aplicacao_linguagem_3_dia: string;
                dia_aplicacao_linguagem_4_dia: string;
                dia_aplicacao_linguagem_nenhum: string;
            };
            dia_aplicacao_humanas: {
                dia_aplicacao_humanas_1_dia: string;
                dia_aplicacao_humanas_2_dia: string;
                dia_aplicacao_humanas_3_dia: string;
                dia_aplicacao_humanas_4_dia: string;
                dia_aplicacao_humanas_nenhum: string;
            };
            dia_aplicacao_natureza: {
                dia_aplicacao_natureza_1_dia: string;
                dia_aplicacao_natureza_2_dia: string;
                dia_aplicacao_natureza_3_dia: string;
                dia_aplicacao_natureza_4_dia: string;
                dia_aplicacao_natureza_nenhum: string;
            };
            dia_aplicacao_matematica: {
                dia_aplicacao_matematica_1_dia: string;
                dia_aplicacao_matematica_2_dia: string;
                dia_aplicacao_matematica_3_dia: string;
                dia_aplicacao_matematica_4_dia: string;
                dia_aplicacao_matematica_nenhum: string;
            };
            dia_aplicacao_redacao: {
                dia_aplicacao_redacao_1_dia: string;
                dia_aplicacao_redacao_2_dia: string;
                dia_aplicacao_redacao_3_dia: string;
                dia_aplicacao_redacao_4_dia: string;
                dia_aplicacao_redacao_nenhum: string;
            };
        };
        avaliacao_conhecimento_questao: {
            nivel_dificuldade: {
                baixa: string;
                media: string;
                alta: string;
            };
            item_plano_acao: {
                questao_01: string;
                questao_02: string;
            };
            gabarito: {
                opcao_a: string;
                opcao_b: string;
                opcao_c: string;
                opcao_d: string;
                opcao_e: string;
            };
            abrangencia_lista_adaptada: {
                abrangencia_lista_adaptada_conteudo: string;
                abrangencia_lista_adaptada_habilidade: string;
            };
        };
        avaliacao_conhecimento_escola: {
            situacao: {
                recebida: string;
                aceita: string;
                aplicada: string;
                liberada_svida: string;
            };
            versao_json_retorno_diagramacao: {
                versao_1: string;
                versao_2: string;
                versao_3: string;
            };
        };
        objetivo_aprendizagem_desenvolvimento: {
            faixa_etaria: {
                bebe: string;
                crianca_bem_pequena: string;
                crianca_pequena: string;
            };
        };
        sondagem_basica_desenvolvimento_atividade: {
            destinado: {
                destinado_professor: string;
                destinado_pais: string;
                destinado_ambos: string;
            };
            tipo_link: {
                site: string;
                video: string;
                podcast: string;
                livro: string;
                filme: string;
                rede_social: string;
            };
        };
        turma_avaliacao_resultado: {
            tipo_registro: {
                resultado_turma: string;
                resultado_turma_campo_experiencia: string;
                resultado_aluno: string;
                resultado_aluno_campo_experiencia: string;
                resultado_aluno_area_conhecimento: string;
                resultado_aluno_habilidade: string;
                resultado_aluno_materia: string;
                resultado_turma_materia: string;
                resultado_aluno_oic_habilidade: string;
            };
            status_resultado: {
                rubrica_iniciado: string;
                rubrica_em_desenvolvimento: string;
                rubrica_esperado: string;
                rubrica_superado: string;
            };
        };
        avaliacao_conhecimento_questao_resposta: {
            item_resposta: {
                opcao_a: string;
                opcao_b: string;
                opcao_c: string;
                opcao_d: string;
                opcao_e: string;
                sem_resposta: string;
            };
        };
        curso: {
            categoria: {
                categoria_1: string;
                categoria_2: string;
                categoria_3: string;
            };
        };
        assunto_sistema_ensino: {
            sistema_ensino: {
                sistema_ensino_svida: string;
                sistema_ensino_sas: string;
            };
        };
        campo_experiencia_atividade: {
            destinado: {
                destinado_professor: string;
                destinado_pais: string;
                destinado_aluno: string;
            };
            tipo: {
                tipo_atividade_video: string;
                tipo_atividade_plano_acao: string;
            };
        };
        pessoa_responsavel: {
            grau_parentesco: {
                grau_parentesco_pais: string;
                grau_parentesco_irmaos: string;
                grau_parentesco_tios: string;
                grau_parentesco_avos: string;
                grau_parentesco_padrastos: string;
                grau_parentesco_amigos: string;
            };
        };
        turma_avaliacao_questao_resposta: {
            item_resposta: {
                opcao_a: string;
                opcao_b: string;
                opcao_c: string;
                opcao_d: string;
                opcao_e: string;
                sem_resposta: string;
            };
            item_resposta_online: {
                opcao_online_a: string;
                opcao_online_b: string;
                opcao_online_c: string;
                opcao_online_d: string;
                opcao_online_e: string;
                sem_resposta_online: string;
            };
        };
        avaliacao_conhecimento_questao_link: {
            tipo_link: {
                site: string;
                video: string;
                video_longo: string;
                podcast: string;
                livro: string;
                filme: string;
                resumo: string;
                mapa_mental: string;
                texto: string;
            };
        };
        assunto_link: {
            tipo: {
                site: string;
                video: string;
                podcast: string;
                link_assunto: string;
                link_complementar: string;
                filme: string;
                livro: string;
            };
        };
        turma_avaliacao_lista_adaptada: {
            item_resposta: {
                opcao_a: string;
                opcao_b: string;
                opcao_c: string;
                opcao_d: string;
                opcao_e: string;
                sem_resposta: string;
            };
        };
        assunto_edicao: {
            status: {
                assunto_edicao_pendente: string;
                assunto_edicao_liberado: string;
            };
        };
        assunto_questao: {
            tipo_questao: {
                tipo_questao_teste_sala: string;
                tipo_questao_teste_aprendizagem: string;
                tipo_questao_teste_aprofundamento: string;
                tipo_questao_vestibular_regional: string;
                tipo_questao_enem: string;
                tipo_questao_vamos_interpretar: string;
                tipo_questao_hora_de_praticiar: string;
                tipo_questao_praticando_em_casa: string;
                tipo_questao_indo_mais_fundo: string;
                tipo_questao_desenvolvendo_habilidades: string;
            };
            nivel_dificuldade: {
                nivel_dificuldade_facil: string;
                nivel_dificuldade_medio: string;
                nivel_dificuldade_dificil: string;
                nivel_dificuldade_vida: string;
            };
            gabarito: {
                opcao_a: string;
                opcao_b: string;
                opcao_c: string;
                opcao_d: string;
                opcao_e: string;
                resposta_aberta: string;
            };
        };
        turma_aluno_assunto_questao: {
            item_resposta: {
                opcao_a: string;
                opcao_b: string;
                opcao_c: string;
                opcao_d: string;
                opcao_e: string;
                sem_resposta: string;
                resposta_aberta: string;
            };
        };
        planejamento_pedagogico: {
            tipo_material: {
                tipo_material_7v: string;
                tipo_material_14v: string;
                tipo_material_instensivo: string;
                tipo_material_todos: string;
            };
        };
        migracao_planilha: {
            tipo_migracao: {
                tipo_migracao_aluno: string;
                tipo_migracao_professor: string;
                tipo_migracao_apg: string;
            };
            verao: {
                versao_1: string;
                versao_2: string;
            };
        };
        convite_pessoa: {
            perfil: {
                aluno: string;
                professor: string;
                gestao_escola: string;
                diretor: string;
                coordenador: string;
                supervisor: string;
            };
            sexo: {
                masculino: string;
                feminino: string;
                sexo_ignorado: string;
            };
            lingua_estrangeira: {
                convite_pessoa_ingles: string;
                convite_pessoa_espanhol: string;
            };
        };
        registro_navegacao: {
            tipo_registro_navegacao: {
                acesso_plano_acao: string;
                download_plano_acao: string;
                acesso_responder_plano_acao: string;
                link_plano_acao: string;
                conteudo_digital_oic_plano_acao: string;
                conteudo_digital_oic_roteiro_estudo: string;
            };
        };
        speck_elemento: {
            speck_nivel: {
                speck_nivel_big_5: string;
                speck_nivel_necessidades: string;
                speck_nivel_valores: string;
                speck_nivel_bncc_area: string;
                speck_nivel_bncc_competencia: string;
                speck_nivel_tipologia2: string;
            };
            speck_caracteristica: {
                speck_caracteristica_abertura: string;
                speck_caracteristica_conscienciosidade: string;
                speck_caracteristica_extroversao: string;
                speck_caracteristica_amabilidade: string;
                speck_caracteristica_faixa_emocional: string;
            };
        };
        caracteristica_socio_emocional: {
            faixa: {
                faixa_muito_baixo: string;
                faixa_baixo: string;
                faixa_medio: string;
                faixa_alto: string;
                faixa_muito_alto: string;
            };
        };
        turma_avaliacao_acompanhamento: {
            situacao: {
                no_prazo: string;
                atrasado: string;
            };
        };
        resultado_plano_acao: {
            tipo_registro: {
                resultado_aluno_area_conhecimento: string;
                resultado_aluno_assunto: string;
                resultado_aluno: string;
            };
        };
        planejamento_pedagogico_infantil: {
            livro: {
                livro_I: string;
                livro_II: string;
                livro_III: string;
                livro_IV: string;
            };
            unidade: {
                unidade_1: string;
                unidade_2: string;
                unidade_3: string;
                unidade_4: string;
                unidade_5: string;
                unidade_6: string;
                unidade_7: string;
                unidade_8: string;
                unidade_9: string;
                unidade_10: string;
                unidade_11: string;
                unidade_12: string;
            };
        };
        serie_avaliacao_infantil_resultado: {
            item_resposta: {
                iniciado: string;
                desenvolvimento: string;
                esperado: string;
                superado: string;
            };
            item_resposta_familia: {
                familia_iniciado: string;
                familia_desenvolvimento: string;
                familia_esperado: string;
                familia_superado: string;
            };
        };
        banco_questao_link: {
            tipo_link: {
                site: string;
                video: string;
                video_longo: string;
                podcast: string;
                livro: string;
                filme: string;
                resumo: string;
                mapa_mental: string;
                texto: string;
            };
        };
        pedido_venda: {
            situacao: {
                ativo: string;
                aguardando_pagamento: string;
                pagamento_realizado: string;
                entregue_vida: string;
                cancelado: string;
                entregue_aluno: string;
                aguardando_confirmacao_pagamento: string;
            };
        };
        pedido_venda_pagamento: {
            forma_pagamento: {
                cartao_credito: string;
                transferencia_bancaria: string;
            };
        };
        configuracao: {
            integracao_socio_emocional: {
                socioemocional_speck: string;
                socioemocional_ibm_watson: string;
                socioemocional_ambos: string;
                socioemocional_maxia: string;
            };
            versao_banco: {
                teste: string;
                experiencia: string;
                producao: string;
                comercial: string;
                homologacao: string;
            };
        };
        objeto_conhecimento: {
            nivel: {
                nivel_pouco_importante: string;
                nivel_importante: string;
                nivel_muito_importante: string;
            };
        };
        objeto_conhecimento_conteudo_digital: {
            tipo: {
                site: string;
                video: string;
                podcast: string;
                mapa_mental: string;
                artigo_pedagogico: string;
                jogo_educativo: string;
                pea: string;
            };
            duracao_video: {
                video_muito_curto: string;
                video_curto: string;
                video_regular: string;
                video_longo: string;
                video_muito_longo: string;
            };
            tamanho_texto: {
                texto_muito_curto: string;
                texto_curto: string;
                texto_regular: string;
                texto_longo: string;
                texto_muito_longo: string;
            };
            forma: {
                sintetizado: string;
                detalhado: string;
            };
            plataforma: {
                plataforma_youtube: string;
                plataforma_igtv: string;
                plataforma_tiktok: string;
                plataforma_spotify: string;
                plataforma_amazon: string;
                plataforma_deezer: string;
                plataforma_site: string;
            };
            recurso: {
                lousa: string;
                slide: string;
                escrita_papel: string;
                animacao: string;
                sem_recurso: string;
            };
            tipo_atividade_embasamento: {
                atividade_artigo_pedagogico: string;
                atividade_video: string;
            };
            nivel_atividade_embasamento: {
                nivel_basico: string;
                nivel_medio: string;
                nivel_aprofundamento: string;
            };
        };
        banco_questao_serie: {
            nivel_dificuldade: {
                baixa: string;
                media: string;
                alta: string;
            };
        };
        banco_questao_revisao: {
            status: {
                ativa: string;
                revisao: string;
                aprovada: string;
                inativa: string;
            };
            tipo: {
                item_duplicado: string;
                alternativa_duplicada: string;
                imagem_quebrada: string;
                pegadinha: string;
                gabarito_errado: string;
                nivel_dificuldade_errado: string;
                item_ok: string;
                outros: string;
            };
        };
        ciclo_avaliacao_escola_agendamento: {
            dia_aplicacao_linguagem: {
                dia_aplicacao_linguagem_1_dia: string;
                dia_aplicacao_linguagem_2_dia: string;
                dia_aplicacao_linguagem_3_dia: string;
                dia_aplicacao_linguagem_4_dia: string;
                dia_aplicacao_linguagem_nenhum: string;
            };
            dia_aplicacao_humanas: {
                dia_aplicacao_humanas_1_dia: string;
                dia_aplicacao_humanas_2_dia: string;
                dia_aplicacao_humanas_3_dia: string;
                dia_aplicacao_humanas_4_dia: string;
                dia_aplicacao_humanas_nenhum: string;
            };
            dia_aplicacao_natureza: {
                dia_aplicacao_natureza_1_dia: string;
                dia_aplicacao_natureza_2_dia: string;
                dia_aplicacao_natureza_3_dia: string;
                dia_aplicacao_natureza_4_dia: string;
                dia_aplicacao_natureza_nenhum: string;
            };
            dia_aplicacao_matematica: {
                dia_aplicacao_matematica_1_dia: string;
                dia_aplicacao_matematica_2_dia: string;
                dia_aplicacao_matematica_3_dia: string;
                dia_aplicacao_matematica_4_dia: string;
                dia_aplicacao_matematica_nenhum: string;
            };
            dia_aplicacao_redacao: {
                dia_aplicacao_redacao_1_dia: string;
                dia_aplicacao_redacao_2_dia: string;
                dia_aplicacao_redacao_3_dia: string;
                dia_aplicacao_redacao_4_dia: string;
                dia_aplicacao_redacao_nenhum: string;
            };
        };
        turma_avaliacao_roteiro_estudo: {
            nivel: {
                critico: string;
                baixo: string;
                medio: string;
                alto: string;
                elevado: string;
            };
            item_resposta: {
                opcao_a: string;
                opcao_b: string;
                opcao_c: string;
                opcao_d: string;
                opcao_e: string;
                sem_resposta: string;
            };
        };
        proposta_redacao: {
            genero: {
                carta: string;
                conto_variacoes: string;
                cronica: string;
                receita: string;
                texto_dissertativo_argumentativo: string;
                noticia: string;
                reportagem: string;
                autobiografia: string;
                biografia: string;
                reconto: string;
                relato: string;
                fabula: string;
                diario: string;
                resumo: string;
                artigo_de_opiniao: string;
                resenha: string;
                carta_aberta: string;
                manifesto: string;
                comentario: string;
                carta_leitor: string;
                depoimento: string;
                texto_explicativo: string;
                texto_narrativo: string;
                apologo: string;
                anuncio_publicitario: string;
                parabola: string;
                dedicatoria: string;
                epigrafe: string;
                discurso: string;
                email: string;
                carta_solicitacao: string;
                carta_reclamacao: string;
                circular: string;
                abaixo_assinado: string;
            };
        };
        avaliacao_conhecimento_questao_sugestao: {
            posicao: {
                posicao_a: string;
                posicao_b: string;
                posicao_c: string;
            };
            assunto_comentario: {
                gabarito_errado: string;
                questao_sem_resposta: string;
                falta_imagem_tabela: string;
                erro_ortografico: string;
                outros: string;
            };
        };
        duvida: {
            origem: {
                tira_duvida: string;
                tutor_aula: string;
                suporte: string;
            };
            status: {
                aguardando_resposta: string;
                respondida: string;
                solucionada: string;
            };
        };
        duvida_mensagem: {
            status: {
                aguardando_resposta: string;
                respondida: string;
                solucionada: string;
            };
            tipo_registro: {
                mensagem_abertura: string;
                comentario: string;
                resposta: string;
                substituicao_professor: string;
                finalizar_solucionada: string;
            };
        };
        pacote_servico: {
            servico: {
                tira_duvida: string;
                aula: string;
            };
        };
        tutoria_carteira_transferencia: {
            tipo_transferencia: {
                pix: string;
            };
            tipo_conta: {
                conta_corrente: string;
                conta_poupanca: string;
            };
            finalidade: {
                credito_conta_corrente: string;
                credito_conta_poupanca: string;
            };
        };
        ciclo_avaliacao_estrutura: {
            dia_aplicacao: {
                dia_aplicacao_1: string;
                dia_aplicacao_2: string;
                dia_aplicacao_3: string;
                dia_aplicacao_4: string;
                dia_aplicacao_5: string;
            };
        };
        turma_avaliacao_processamento_dia: {
            dia: {
                processamento_1_dia: string;
                processamento_2_dia: string;
                processamento_3_dia: string;
                processamento_4_dia: string;
                processamento_5_dia: string;
                processamento_unico: string;
            };
            data_status_processamento_cartao: {
                nao_processado: string;
                em_processamento: string;
                falha: string;
                processado: string;
            };
        };
        avaliacao_conhecimento_escola_dia: {
            dia_aplicacao: {
                dia_aplicacao_1: string;
                dia_aplicacao_2: string;
                dia_aplicacao_3: string;
                dia_aplicacao_4: string;
                dia_aplicacao_5: string;
            };
        };
        avaliacao_conhecimento_validacao: {
            abrangencia: {
                questoes: string;
                avaliacao: string;
                diagramacao: string;
            };
        };
    };
};
