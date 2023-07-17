export const enums = {
    'pt-BR': {
        pessoa: {
            tipo_pessoa: {
                fisica: "Física",
                juridica: "Jurídica"
            },
            sexo: {
                masculino: "Masculino",
                feminino: "Feminino",
                sexo_ignorado: "Ignorado"
            },
            estado_civis: {
                solteiro: "Solteiro(a)",
                casado: "Casado(a)",
                divorciado: "Divorciado(a)",
                viuvo: "Viúvo(a)",
                separado_judicialmente: "Separado(a) Judicialmente",
                uniao_estavel: "União Estável",
                ignorado: "Ignorado",
                outros: "Outros"
            },
            cor_pele: {
                branca: "Branca",
                clara: "Clara",
                morena: "Morena",
                parda: "Parda",
                preta: "Preta"
            },
            eleitor: {
                n_c: "n/c"
            },
            tipo_material: {
                tipo_material_7v: "7V",
                tipo_material_14v: "14V",
                tipo_material_instensivo: "Intensivo"
            },
            perfil_comportamental: {
                estrategico: "Estratégico",
                logico: "Lógico",
                lider: "Líder",
                inovador: "Inovador",
                mediador: "Mediador",
                executor: "Executor",
                aventureiro: "Aventureiro",
                empreendedor: "Empreendedor"
            }
        },
        banco_questao: {
            nivel_dificuldade: {
                baixa: "Baixa",
                media: "Média",
                alta: "Alta"
            },
            gabarito: {
                opcao_a: "A",
                opcao_b: "B",
                opcao_c: "C",
                opcao_d: "D",
                opcao_e: "E"
            },
            qtde_itens_resposta: {
                a_b_c_d_e: "5 (A,B,C,D,E)",
                a_b_c_d: "4 (A,B,C,D)"
            },
            status: {
                ativa: "Ativa",
                revisao: "Revisão",
                aprovada: "Aprovada",
                inativa: "Inativa"
            },
            tipo: {
                comun: "Comum",
                com_lacunas: "Com Lacunas",
                analise_afirmativas: "Análise de afirmativas",
                associacao: "Associação"
            },
            formato: {
                objetiva: "Objetiva",
                subjetiva: "Subjetiva"
            }
        },
        contrato_venda: {
            status: {
                ativo: "Ativo",
                inativo: "Inativo"
            },
            periodicidade: {
                tres_anos: "3 Anos",
                quatro_anos: "4 Anos",
                cinco_anos: "5 Anos",
                um_ano: "1 Ano"
            },
            tipo_operacao: {
                tipo_operacao_venda: "Venda",
                tipo_operacao_prospeccao: "Prospecção"
            }
        },
        contrato_venda_ano_letivo_etapas: {
            tipo: {
                medial_anual: "Média Anual",
                recuperacao: "Recuperação"
            }
        },
        turma: {
            turno: {
                manha: "Manhã",
                tarde: "Tarde",
                noite: "Noite",
                integral: "Integral"
            }
        },
        turma_aluno: {
            status: {
                ativo: "Ativo",
                transferido: "Transferido",
                inativo: "Inativo"
            },
            lingua_estrangeira: {
                turma_aluno_ingles: "Inglês",
                turma_aluno_espanhol: "Espanhol"
            }
        },
        turma_avaliacao: {
            modelo: {
                padrao: "Padrão",
                enem: "ENEM",
                sondagem: "Educação Infantil"
            },
            status: {
                aguardando_anexo: "Aguardando Aenxos",
                aguardando_processamento: "Aguardando Processamento",
                processando_cartao_resposta: "Processando Cartão Resposta",
                processando_resultado: "Processando Resultados",
                gerando_plano_acao_aluno: "Gerando Plano de Ação de Alunos",
                gerando_plano_acao_professor: "Gerando Plao de Ação da Gestão",
                concluido: "Processamento Concluído",
                falhou: "Ocorreu falha",
                liberado: "Resultado Liberado",
                nao_aplicar: "Não Aplicar"
            },
            status_geracao_pdf_diagramado: {
                pendente: "Pendente",
                em_processamento: "Em Processamento",
                gerado: "Gerado",
                falha: "Falha"
            }
        },
        turma_avaliacao_questao: {
            tipo: {
                padrao: "Padrão",
                desafio: "Desafio",
                extra: "Extra"
            }
        },
        turma_avaliacao_aluno: {
            lingua_estrangeira: {
                turma_avaliacao_aluno_ingles: "Inglês",
                turma_avaliacao_aluno_espanhol: "Espanhol"
            },
            nota_redacao_fundamental_1: {
                em_desenvolvimento: "Em Desenvolvimento",
                esperado: "Esperado",
                superado: "Superado",
                fuga_tema: "Fuga Tema/Gênero"
            }
        },
        user: {
            sexo: {
                masculino: "Masculino",
                feminino: "Feminino",
                sexo_ignorado: "Ignorado"
            },
            perfil: {
                gestao_vida: "Gestão Vida",
                aluno: "Aluno",
                professor: "Professor",
                gestao_escola: "Gestão Escola",
                pais: "Pais e/ou Responsáveis",
                vendedor: "Vendedor",
                diretor: "Diretor",
                coordenador: "Coordenador",
                supervisor: "Supervisor",
                apresentacao: "Apresentação",
                escola_online: "Escola Online",
                ecommerce: "Comércio Eletrônico",
                admin: "Administrador do Sistema",
                psicologo: "Psicólogo",
                prospeccao: "Prospecção"
            }
        },
        turma_professor: {
            status: {
                ativo: "Ativo",
                inativo: "Inativo"
            }
        },
        avaliacao_conhecimento: {
            modelo: {
                enem: "ENEM",
                ime: "IME",
                ita: "ITA",
                uece: "UECE",
                unicamp: "UNICAMP",
                unifor: "UNIFOR",
                usp: "USP",
                sondagem: "Educação Infantil",
                avaliacao_simples: "Avaliação Simples",
                gestao: "Gestão",
                avaliacao_inteligente: "Avaliação Inteligente"
            },
            situacao: {
                pendente: "Pendente",
                liberada_escola: "Liberada para Escola",
                aplicada: "Aplicada",
                liberada_gestao_escola: "Liberada para Gestão das Escolas",
                liberada_pais: "Liberada para Pais e Resposáveis",
                falhou: "Falhou"
            },
            etapa: {
                etapa1: "Etapa 1",
                etapa2: "Etapa 2",
                etapa3: "Etapa 3",
                etapa4: "Etapa 4",
                recuperacao: "Recuperação"
            },
            abrangencia: {
                abrangencia_sistema_vida: "Sistema Vida",
                abrangencia_restrita: "Restrita"
            },
            qtde_itens_resposta: {
                a_b_c_d_e: "5 (A,B,C,D,E)",
                a_b_c_d: "4 (A,B,C,D)"
            },
            qtde_itens_plano_acao: {
                pa_a_b_c_d_e: "5 (A,B,C,D,E)",
                pa_a_b_c_d: "4 (A,B,C,D)"
            },
            versao: {
                versao_1: "Versão 1",
                versao_2: "Versão 2"
            },
            dia_aplicacao_linguagem: {
                dia_aplicacao_linguagem_1_dia: "1o. Dia",
                dia_aplicacao_linguagem_2_dia: "2o. Dia",
                dia_aplicacao_linguagem_3_dia: "3o. Dia",
                dia_aplicacao_linguagem_4_dia: "4o. Dia",
                dia_aplicacao_linguagem_nenhum: "Sem Avaliação"
            },
            dia_aplicacao_humanas: {
                dia_aplicacao_humanas_1_dia: "1o. Dia",
                dia_aplicacao_humanas_2_dia: "2o. Dia",
                dia_aplicacao_humanas_3_dia: "3o. Dia",
                dia_aplicacao_humanas_4_dia: "4o. Dia",
                dia_aplicacao_humanas_nenhum: "Sem Avaliação"
            },
            dia_aplicacao_natureza: {
                dia_aplicacao_natureza_1_dia: "1o. Dia",
                dia_aplicacao_natureza_2_dia: "2o. Dia",
                dia_aplicacao_natureza_3_dia: "3o. Dia",
                dia_aplicacao_natureza_4_dia: "4o. Dia",
                dia_aplicacao_natureza_nenhum: "Sem Avaliação"
            },
            dia_aplicacao_matematica: {
                dia_aplicacao_matematica_1_dia: "1o. Dia",
                dia_aplicacao_matematica_2_dia: "2o. Dia",
                dia_aplicacao_matematica_3_dia: "3o. Dia",
                dia_aplicacao_matematica_4_dia: "4o. Dia",
                dia_aplicacao_matematica_nenhum: "Sem Avaliação"
            },
            dia_aplicacao_redacao: {
                dia_aplicacao_redacao_1_dia: "1o. Dia",
                dia_aplicacao_redacao_2_dia: "2o. Dia",
                dia_aplicacao_redacao_3_dia: "3o. Dia",
                dia_aplicacao_redacao_4_dia: "4o. Dia",
                dia_aplicacao_redacao_nenhum: "Sem Avaliação"
            }
        },
        avaliacao_conhecimento_questao: {
            nivel_dificuldade: {
                baixa: "Baixa",
                media: "Média",
                alta: "Alta"
            },
            item_plano_acao: {
                questao_01: "01",
                questao_02: "02"
            },
            gabarito: {
                opcao_a: "A",
                opcao_b: "B",
                opcao_c: "C",
                opcao_d: "D",
                opcao_e: "E"
            },
            abrangencia_lista_adaptada: {
                abrangencia_lista_adaptada_conteudo: "Conteúdo",
                abrangencia_lista_adaptada_habilidade: "Habilidade"
            }
        },
        avaliacao_conhecimento_escola: {
            situacao: {
                recebida: "Recebida",
                aceita: "Aceita",
                aplicada: "Aplicada",
                liberada_svida: "Liberada Sistema Vida"
            },
            versao_json_retorno_diagramacao: {
                versao_1: "Série | Dia | Seq. Chave: { Número | Id. Item }",
                versao_2: "Série | Dia | Seq. Chave: {Id. Item | Número }",
                versao_3: "Série | Turma  | Dia | Seq. Chave: (Id. Item | Número )"
            }
        },
        objetivo_aprendizagem_desenvolvimento: {
            faixa_etaria: {
                bebe: "Bebê",
                crianca_bem_pequena: "Criança bem Pequena",
                crianca_pequena: "Criança Pequena"
            }
        },
        sondagem_basica_desenvolvimento_atividade: {
            destinado: {
                destinado_professor: "Professor(a)",
                destinado_pais: "Família",
                destinado_ambos: "Ambos"
            },
            tipo_link: {
                site: "Site",
                video: "Vídeo",
                podcast: "Podcast",
                livro: "Livro",
                filme: "Filme",
                rede_social: "Rede Social"
            }
        },
        turma_avaliacao_resultado: {
            tipo_registro: {
                resultado_turma: "Resultado Geral",
                resultado_turma_campo_experiencia: "Resultado - Turma por Campo de Experiência",
                resultado_aluno: "Resultado por Aluno",
                resultado_aluno_campo_experiencia: "Resultado - Aluno por Campo de Experiência",
                resultado_aluno_area_conhecimento: "Resultado - Aluno por Área de Conhecimento",
                resultado_aluno_habilidade: "Resultado - Aluno por Habilidade",
                resultado_aluno_materia: "Resultado - Aluno por Matéria",
                resultado_turma_materia: "Resultado - Turma por Matéria",
                resultado_aluno_oic_habilidade: "Resultado - Aluno por OIC-Habilidade"
            },
            status_resultado: {
                rubrica_iniciado: "Iniciado",
                rubrica_em_desenvolvimento: "Em Desenvolvimento",
                rubrica_esperado: "Esperado",
                rubrica_superado: "Superado"
            }
        },
        avaliacao_conhecimento_questao_resposta: {
            item_resposta: {
                opcao_a: "A",
                opcao_b: "B",
                opcao_c: "C",
                opcao_d: "D",
                opcao_e: "E",
                sem_resposta: "Sem Resposta"
            }
        },
        curso: {
            categoria: {
                categoria_1: "1",
                categoria_2: "2",
                categoria_3: "3"
            }
        },
        assunto_sistema_ensino: {
            sistema_ensino: {
                sistema_ensino_svida: "SVida",
                sistema_ensino_sas: "SAS"
            }
        },
        campo_experiencia_atividade: {
            destinado: {
                destinado_professor: "Professor(a)",
                destinado_pais: "Pais",
                destinado_aluno: "Aluno"
            },
            tipo: {
                tipo_atividade_video: "Vídeo",
                tipo_atividade_plano_acao: "Plano de Açãoresultado_aluno_materia"
            }
        },
        pessoa_responsavel: {
            grau_parentesco: {
                grau_parentesco_pais: "Pais",
                grau_parentesco_irmaos: "Irmãos",
                grau_parentesco_tios: "Tios",
                grau_parentesco_avos: "Avós",
                grau_parentesco_padrastos: "Padrastos",
                grau_parentesco_amigos: "Amigos"
            }
        },
        turma_avaliacao_questao_resposta: {
            item_resposta: {
                opcao_a: "A",
                opcao_b: "B",
                opcao_c: "C",
                opcao_d: "D",
                opcao_e: "E",
                sem_resposta: "Sem Resposta"
            },
            item_resposta_online: {
                opcao_online_a: "A",
                opcao_online_b: "B",
                opcao_online_c: "C",
                opcao_online_d: "D",
                opcao_online_e: "E",
                sem_resposta_online: "Sem Resposta"
            }
        },
        avaliacao_conhecimento_questao_link: {
            tipo_link: {
                site: "Site",
                video: "Vídeo Curto",
                video_longo: "Vídeo Longo",
                podcast: "PodCast",
                livro: "Indicação de Livro",
                filme: "Indicação de Filme",
                resumo: "Resumo",
                mapa_mental: "Mapa Mental",
                texto: "Texto"
            }
        },
        assunto_link: {
            tipo: {
                site: "Site",
                video: "Vídeo",
                podcast: "PodCast",
                link_assunto: "Link sobre o assunto",
                link_complementar: "Link Complementar",
                filme: "Indicação de Filme",
                livro: "Indicação de Livro"
            }
        },
        turma_avaliacao_lista_adaptada: {
            item_resposta: {
                opcao_a: "A",
                opcao_b: "B",
                opcao_c: "C",
                opcao_d: "D",
                opcao_e: "E",
                sem_resposta: "Sem Resposta"
            }
        },
        assunto_edicao: {
            status: {
                assunto_edicao_pendente: "Pendente",
                assunto_edicao_liberado: "Liberado"
            }
        },
        assunto_questao: {
            tipo_questao: {
                tipo_questao_teste_sala: "Teste para Sala",
                tipo_questao_teste_aprendizagem: "Teste para Aprendizagem",
                tipo_questao_teste_aprofundamento: "Teste para Aprofundamento",
                tipo_questao_vestibular_regional: "Vestibular Regional",
                tipo_questao_enem: "Questões ENEM",
                tipo_questao_vamos_interpretar: "Vamos Interpretar",
                tipo_questao_hora_de_praticiar: "Hora de Praticar",
                tipo_questao_praticando_em_casa: "Praticando em Casa",
                tipo_questao_indo_mais_fundo: "Indo Mais a Fundo",
                tipo_questao_desenvolvendo_habilidades: "Desenvolvendo Habilidades"
            },
            nivel_dificuldade: {
                nivel_dificuldade_facil: "Fácil",
                nivel_dificuldade_medio: "Média",
                nivel_dificuldade_dificil: "Difícil",
                nivel_dificuldade_vida: "Vida"
            },
            gabarito: {
                opcao_a: "A",
                opcao_b: "B",
                opcao_c: "C",
                opcao_d: "D",
                opcao_e: "E",
                resposta_aberta: "Resposta Aberta"
            }
        },
        turma_aluno_assunto_questao: {
            item_resposta: {
                opcao_a: "A",
                opcao_b: "B",
                opcao_c: "C",
                opcao_d: "D",
                opcao_e: "E",
                sem_resposta: "SR",
                resposta_aberta: "Resposta Aberta"
            }
        },
        planejamento_pedagogico: {
            tipo_material: {
                tipo_material_7v: "7V",
                tipo_material_14v: "14V",
                tipo_material_instensivo: "Intensivo",
                tipo_material_todos: "Todos"
            }
        },
        migracao_planilha: {
            tipo_migracao: {
                tipo_migracao_aluno: "Aluno",
                tipo_migracao_professor: "Professor",
                tipo_migracao_apg: "Aluno/Professor/Gestão"
            },
            verao: {
                versao_1: "2020",
                versao_2: "2021"
            }
        },
        convite_pessoa: {
            perfil: {
                aluno: "Aluno(a)",
                professor: "Professor(a)",
                gestao_escola: "Gestão Escola",
                diretor: "Dietor(a)",
                coordenador: "Coordenador(a)",
                supervisor: "Supervisor(a)"
            },
            sexo: {
                masculino: "Masculino",
                feminino: "Feminino",
                sexo_ignorado: "Ignorado"
            },
            lingua_estrangeira: {
                convite_pessoa_ingles: "Inglês",
                convite_pessoa_espanhol: "Espanhol"
            }
        },
        registro_navegacao: {
            tipo_registro_navegacao: {
                acesso_plano_acao: "Acesso ao plano de ação",
                download_plano_acao: "Download plano de ação",
                acesso_responder_plano_acao: "Acesso para responder o plano de ação",
                link_plano_acao: "Link Plano de Ação",
                conteudo_digital_oic_plano_acao: "Conteúdo Oic - Plano Ação",
                conteudo_digital_oic_roteiro_estudo: "Conteúdo Oic - Roteiro Estudo"
            }
        },
        speck_elemento: {
            speck_nivel: {
                speck_nivel_big_5: "Top 5",
                speck_nivel_necessidades: "Necessidades",
                speck_nivel_valores: "Valores",
                speck_nivel_bncc_area: "Área de Conhecimento",
                speck_nivel_bncc_competencia: "Competências da Educação Básica",
                speck_nivel_tipologia2: "Tipologia"
            },
            speck_caracteristica: {
                speck_caracteristica_abertura: "ABERTURA",
                speck_caracteristica_conscienciosidade: "CONSCIENCIOSIADE",
                speck_caracteristica_extroversao: "EXTROVERSÃO",
                speck_caracteristica_amabilidade: "AMABILIDADE",
                speck_caracteristica_faixa_emocional: "FAIXA EMOCIONAL"
            }
        },
        caracteristica_socio_emocional: {
            faixa: {
                faixa_muito_baixo: "Muito Baixo",
                faixa_baixo: "Baixo",
                faixa_medio: "Médio",
                faixa_alto: "Alto",
                faixa_muito_alto: "Muito Alto"
            }
        },
        turma_avaliacao_acompanhamento: {
            situacao: {
                no_prazo: "No Prazo",
                atrasado: "Atrasado"
            }
        },
        resultado_plano_acao: {
            tipo_registro: {
                resultado_aluno_area_conhecimento: "Área de conhecimento",
                resultado_aluno_assunto: "Assunto",
                resultado_aluno: "Aluno"
            }
        },
        planejamento_pedagogico_infantil: {
            livro: {
                livro_I: "Livro I",
                livro_II: "Livro II",
                livro_III: "Livro III",
                livro_IV: "Livro IV"
            },
            unidade: {
                unidade_1: "Unidade 1",
                unidade_2: "Unidade 2",
                unidade_3: "Unidade 3",
                unidade_4: "Unidade 4",
                unidade_5: "Unidade 5",
                unidade_6: "Unidade 6",
                unidade_7: "Unidade 7",
                unidade_8: "Unidade 8",
                unidade_9: "Unidade 9",
                unidade_10: "Unidade 10",
                unidade_11: "Unidade 11",
                unidade_12: "Unidade 12"
            }
        },
        serie_avaliacao_infantil_resultado: {
            item_resposta: {
                iniciado: "Iniciado",
                desenvolvimento: "Desenvolvendo",
                esperado: "Esperado",
                superado: "Superado"
            },
            item_resposta_familia: {
                familia_iniciado: "Iniciado",
                familia_desenvolvimento: "Desenvolvendo",
                familia_esperado: "Esperado",
                familia_superado: "Superado"
            }
        },
        banco_questao_link: {
            tipo_link: {
                site: "Site",
                video: "Vídeo Curto",
                video_longo: "Vídeo Longo",
                podcast: "PodCast",
                livro: "Indicação de Livro",
                filme: "Indicação de Filme",
                resumo: "Resumo",
                mapa_mental: "Mapa Mental",
                texto: "Texto"
            }
        },
        pedido_venda: {
            situacao: {
                ativo: "Ativo",
                aguardando_pagamento: "Aguardando pagamento",
                pagamento_realizado: "Pagamento realizado",
                entregue_vida: "Entregue a escola pelo vida",
                cancelado: "Cancelado",
                entregue_aluno: "Entregue ao aluno pela escola",
                aguardando_confirmacao_pagamento: "Aguardando Confirmação do Pagamento"
            }
        },
        pedido_venda_pagamento: {
            forma_pagamento: {
                cartao_credito: "Cartão de Crédito",
                transferencia_bancaria: "Transferência Bancária"
            }
        },
        configuracao: {
            integracao_socio_emocional: {
                socioemocional_speck: "Speck",
                socioemocional_ibm_watson: "Ibm Watson",
                socioemocional_ambos: "Ambos",
                socioemocional_maxia: "Maxia"
            },
            versao_banco: {
                teste: "Teste",
                experiencia: "Experiência",
                producao: "Produção",
                comercial: "Comercial",
                homologacao: "Homologação"
            }
        },
        objeto_conhecimento: {
            nivel: {
                nivel_pouco_importante: "Pouco Importante",
                nivel_importante: "Importante",
                nivel_muito_importante: "Muito Importante"
            }
        },
        objeto_conhecimento_conteudo_digital: {
            tipo: {
                site: "Site",
                video: "Vídeo",
                podcast: "PodCast",
                mapa_mental: "Mapa Mental",
                artigo_pedagogico: "Artigo Pedagógico",
                jogo_educativo: "Jogo Educativo",
                pea: "Plataformas Estruturadas de Aprendizagem"
            },
            duracao_video: {
                video_muito_curto: "Muito Curto (0 a 3 min)",
                video_curto: "Curto (3 a 10 min)",
                video_regular: "Regular (10 a 20 min)",
                video_longo: "Longo (20 a 40 min)",
                video_muito_longo: "Muito Longo (>40 min)"
            },
            tamanho_texto: {
                texto_muito_curto: "Muito Curto",
                texto_curto: "Curto",
                texto_regular: "Regular",
                texto_longo: "Longo",
                texto_muito_longo: "Muito Longo"
            },
            forma: {
                sintetizado: "Sintetizado",
                detalhado: "Detalhado"
            },
            plataforma: {
                plataforma_youtube: "YouTube",
                plataforma_igtv: "IGTV",
                plataforma_tiktok: "Tik Tok",
                plataforma_spotify: "Spotify",
                plataforma_amazon: "Amazon",
                plataforma_deezer: "Deezer",
                plataforma_site: "Site"
            },
            recurso: {
                lousa: "Lousa",
                slide: "Slide",
                escrita_papel: "Escrita ou Papel",
                animacao: "Animação",
                sem_recurso: "Sem Recurso"
            },
            tipo_atividade_embasamento: {
                atividade_artigo_pedagogico: "Artigo Pedagógico",
                atividade_video: "vídeo"
            },
            nivel_atividade_embasamento: {
                nivel_basico: "Básico",
                nivel_medio: "Médio",
                nivel_aprofundamento: "Aprofundamento"
            }
        },
        banco_questao_serie: {
            nivel_dificuldade: {
                baixa: "Baixa",
                media: "Média",
                alta: "Alta"
            }
        },
        banco_questao_revisao: {
            status: {
                ativa: "Ativa",
                revisao: "Revisão",
                aprovada: "Aprovada",
                inativa: "Inativa"
            },
            tipo: {
                item_duplicado: "Item duplicado",
                alternativa_duplicada: "Alternativa duplicada",
                imagem_quebrada: "Imagem quebrada",
                pegadinha: "Pegadinha",
                gabarito_errado: "Gabarito errado",
                nivel_dificuldade_errado: "Nível de dificuldade",
                item_ok: "Item Ok",
                outros: "Outros"
            }
        },
        ciclo_avaliacao_escola_agendamento: {
            dia_aplicacao_linguagem: {
                dia_aplicacao_linguagem_1_dia: "1o. Dia",
                dia_aplicacao_linguagem_2_dia: "2o. Dia",
                dia_aplicacao_linguagem_3_dia: "3o. Dia",
                dia_aplicacao_linguagem_4_dia: "4o. Dia",
                dia_aplicacao_linguagem_nenhum: "Sem Avaliação"
            },
            dia_aplicacao_humanas: {
                dia_aplicacao_humanas_1_dia: "1o. Dia",
                dia_aplicacao_humanas_2_dia: "2o. Dia",
                dia_aplicacao_humanas_3_dia: "3o. Dia",
                dia_aplicacao_humanas_4_dia: "4o. Dia",
                dia_aplicacao_humanas_nenhum: "Sem Avaliação"
            },
            dia_aplicacao_natureza: {
                dia_aplicacao_natureza_1_dia: "1o. Dia",
                dia_aplicacao_natureza_2_dia: "2o. Dia",
                dia_aplicacao_natureza_3_dia: "3o. Dia",
                dia_aplicacao_natureza_4_dia: "4o. Dia",
                dia_aplicacao_natureza_nenhum: "Sem Avaliação"
            },
            dia_aplicacao_matematica: {
                dia_aplicacao_matematica_1_dia: "1o. Dia",
                dia_aplicacao_matematica_2_dia: "2o. Dia",
                dia_aplicacao_matematica_3_dia: "3o. Dia",
                dia_aplicacao_matematica_4_dia: "4o. Dia",
                dia_aplicacao_matematica_nenhum: "Sem Avaliação"
            },
            dia_aplicacao_redacao: {
                dia_aplicacao_redacao_1_dia: "1o. Dia",
                dia_aplicacao_redacao_2_dia: "2o. Dia",
                dia_aplicacao_redacao_3_dia: "3o. Dia",
                dia_aplicacao_redacao_4_dia: "4o. Dia",
                dia_aplicacao_redacao_nenhum: "Sem Avaliação"
            }
        },
        turma_avaliacao_roteiro_estudo: {
            nivel: {
                critico: "Crítico",
                baixo: "Baixo",
                medio: "Médio",
                alto: "Alto",
                elevado: "Elevado"
            },
            item_resposta: {
                opcao_a: "A",
                opcao_b: "B",
                opcao_c: "C",
                opcao_d: "D",
                opcao_e: "E",
                sem_resposta: "Sem Resposta"
            }
        },
        proposta_redacao: {
            genero: {
                carta: "Carta",
                conto_variacoes: "Conto e Variações",
                cronica: "Crônica",
                receita: "Receita",
                texto_dissertativo_argumentativo: "Texto Dissertativo-Argumentativo",
                noticia: "Notícia",
                reportagem: "Reportagem",
                autobiografia: "Autobiografia",
                biografia: "Biografia",
                reconto: "Reconto",
                relato: "Relato",
                fabula: "Fábula",
                diario: "Diário",
                resumo: "Resumo",
                artigo_de_opiniao: "Artigo de Opinião",
                resenha: "Resenha",
                carta_aberta: "Carta Aberta",
                manifesto: "Manifesto",
                comentario: "Comentário",
                carta_leitor: "Carta Leitor",
                depoimento: "Depoimento",
                texto_explicativo: "Texto Explicativo",
                texto_narrativo: "Texto Narrativo",
                apologo: "Apólogo",
                anuncio_publicitario: "Anúncio Publicitário",
                parabola: "Parábola",
                dedicatoria: "Dedicatória",
                epigrafe: "Epígrafe",
                discurso: "Discruso",
                email: "e-Mail",
                carta_solicitacao: "Carta de Solicitação",
                carta_reclamacao: "Carta de Reclamação",
                circular: "Circular",
                abaixo_assinado: "Abaixo-assinado"
            }
        },
        avaliacao_conhecimento_questao_sugestao: {
            posicao: {
                posicao_a: "A",
                posicao_b: "B",
                posicao_c: "C"
            },
            assunto_comentario: {
                gabarito_errado: "Gabarito errado",
                questao_sem_resposta: "Questão sem resposta",
                falta_imagem_tabela: "Falta imagem ou tabela",
                erro_ortografico: "Erro ortográfico",
                outros: "Outros"
            }
        },
        duvida: {
            origem: {
                tira_duvida: "Tira Dúvida",
                tutor_aula: "Tutoria - Aula",
                suporte: "Suporte"
            },
            status: {
                aguardando_resposta: "Aguardando Resposta",
                respondida: "Respondida",
                solucionada: "solucionada"
            }
        },
        duvida_mensagem: {
            status: {
                aguardando_resposta: "Aguardando Resposta",
                respondida: "Respondida",
                solucionada: "solucionada"
            },
            tipo_registro: {
                mensagem_abertura: "Registro inicial",
                comentario: "Comentário",
                resposta: "Resposta",
                substituicao_professor: "Substituição do Professor",
                finalizar_solucionada: "Finalizar Solucinada"
            }
        },
        pacote_servico: {
            servico: {
                tira_duvida: "Tira Dúvida",
                aula: "Aula"
            }
        },
        tutoria_carteira_transferencia: {
            tipo_transferencia: {
                pix: "Pix"
            },
            tipo_conta: {
                conta_corrente: "Conta Corrente",
                conta_poupanca: "Conta Poupança"
            },
            finalidade: {
                credito_conta_corrente: "Crédito em Conta Corrente",
                credito_conta_poupanca: "Crédito em Conta Poupança"
            }
        },
        ciclo_avaliacao_estrutura: {
            dia_aplicacao: {
                dia_aplicacao_1: "1o Dia",
                dia_aplicacao_2: "2o Dia",
                dia_aplicacao_3: "3o Dia",
                dia_aplicacao_4: "4o Dia",
                dia_aplicacao_5: "5o Dia"
            }
        },
        turma_avaliacao_processamento_dia: {
            dia: {
                processamento_1_dia: "1o Dia",
                processamento_2_dia: "2o Dia",
                processamento_3_dia: "3o Dia",
                processamento_4_dia: "4o Dia",
                processamento_5_dia: "5o Dia",
                processamento_unico: "Todos os Dias"
            },
            data_status_processamento_cartao: {
                nao_processado: "Não Processado",
                em_processamento: "Em Processamento",
                falha: "Falha",
                processado: "Processado"
            }
        },
        avaliacao_conhecimento_escola_dia: {
            dia_aplicacao: {
                dia_aplicacao_1: "1o Dia",
                dia_aplicacao_2: "2o Dia",
                dia_aplicacao_3: "3o Dia",
                dia_aplicacao_4: "4o Dia",
                dia_aplicacao_5: "5o Dia"
            }
        },
        avaliacao_conhecimento_validacao: {
            abrangencia: {
                questoes: "Questões",
                avaliacao: "Avaliação",
                diagramacao: "Diagramação"
            }
        }
    }
};
