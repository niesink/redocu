"use strict";(self.webpackChunkredocu=self.webpackChunkredocu||[]).push([[171],{443:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-3.yaml","themeId":"theme-redoc","isSpecFile":true,"normalizeUrl":true,"spec":{"openapi":"3.0.0","info":{"version":"1.0","title":"EA Koppeling Stamdata"},"tags":[{"name":"Stamdata","description":"API voor het opvragen van algemene stamdata uit EA"}],"paths":{"/fases":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"page","in":"query","schema":{"type":"integer","default":0},"required":false},{"name":"pageSize","in":"query","schema":{"type":"integer","maximum":200,"default":100}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"meta":{"$ref":"#/components/schemas/Paging"},"items":{"type":"array","items":{"$ref":"#/components/schemas/Fase"}}}}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}}}}},"/fases/{externalId}":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Fase"}}}}}}},"/locaties":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"page","in":"query","schema":{"type":"integer","default":0},"required":false},{"name":"pageSize","in":"query","schema":{"type":"integer","maximum":200,"default":100}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"meta":{"$ref":"#/components/schemas/Paging"},"items":{"type":"array","items":{"$ref":"#/components/schemas/Locatie"}}}}}}}}}},"/locaties/{externalId}":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Locatie"}}}}}}},"/aggregatieniveaus":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"page","in":"query","schema":{"type":"integer","default":0},"required":false},{"name":"pageSize","in":"query","schema":{"type":"integer","maximum":200,"default":100}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"meta":{"$ref":"#/components/schemas/Paging"},"items":{"type":"array","items":{"$ref":"#/components/schemas/Aggregatieniveau"}}}}}}}}}},"/aggregatieniveaus/{externalId}":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Aggregatieniveau"}}}}}}},"/onderwijsperiodes":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"page","in":"query","schema":{"type":"integer","default":0},"required":false},{"name":"pageSize","in":"query","schema":{"type":"integer","maximum":200,"default":100}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"meta":{"$ref":"#/components/schemas/Paging"},"items":{"type":"array","items":{"$ref":"#/components/schemas/Onderwijsperiode"}}}}}}}}}},"/onderwijsperiodes/{externalId}":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Onderwijsperiode"}}}}}}},"/roosterstructuren":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"page","in":"query","schema":{"type":"integer","default":0},"required":false},{"name":"pageSize","in":"query","schema":{"type":"integer","maximum":200,"default":100}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"meta":{"$ref":"#/components/schemas/Paging"},"items":{"type":"array","items":{"$ref":"#/components/schemas/Roosterstructuur"}}}}}}}}}},"/roosterstructuren/{externalId}":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Roosterstructuur"}}}}}}},"/cohorten":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"page","in":"query","schema":{"type":"integer","default":0},"required":false},{"name":"pageSize","in":"query","schema":{"type":"integer","maximum":200,"default":100}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"meta":{"$ref":"#/components/schemas/Paging"},"items":{"type":"array","items":{"$ref":"#/components/schemas/Cohort"}}}}}}}}}},"/cohorten/{externalId}":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Cohort"}}}}}}},"/taxonomie":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"page","in":"query","schema":{"type":"integer","default":0},"required":false},{"name":"pageSize","in":"query","schema":{"type":"integer","maximum":200,"default":100}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"meta":{"$ref":"#/components/schemas/Paging"},"items":{"type":"array","items":{"$ref":"#/components/schemas/Taxonomieelement"}}}}}}}}}},"/taxonomie/{externalId}":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Taxonomieelement"}}}}}}},"/organisatieeenheden":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"page","in":"query","schema":{"type":"integer","default":0},"required":false},{"name":"pageSize","in":"query","schema":{"type":"integer","maximum":200,"default":100}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"meta":{"$ref":"#/components/schemas/Paging"},"items":{"type":"array","items":{"$ref":"#/components/schemas/Organisatieeenheid"}}}}}}}}}},"/organisatieeenheden/{externalId}":{"get":{"tags":["Stamdata"],"security":[{"oauth2_client_credentials":["read:stamdata"]}],"parameters":[{"name":"externalId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Organisatieeenheid"}}}}}}}},"components":{"securitySchemes":{"oauth2_client_credentials":{"type":"oauth2","flows":{"clientCredentials":{"tokenUrl":"https://auth.example.com/oauth/token","scopes":{"read:stamdata":"Read access Stamdata"}}}}},"schemas":{"Aggregatieniveau":{"type":"object","required":["id","niveau","naam","code"],"properties":{"id":{"$ref":"#/components/schemas/Identifier"},"niveau":{"type":"integer"},"code":{"type":"string"},"naam":{"type":"string"}}},"Taxonomieelement":{"type":"object","required":["id","code","taxonomiecode","externecode","naam","volgnummer","type","taxonomie"],"properties":{"id":{"$ref":"#/components/schemas/Identifier"},"code":{"type":"string"},"taxonomiecode":{"type":"string"},"externecode":{"type":"string"},"naam":{"type":"string"},"volgnummer":{"type":"integer"},"niveau":{"type":"string"},"type":{"type":"string"},"taxonomie":{"type":"string"},"parent":{"$ref":"#/components/schemas/Reference"},"children":{"type":"array","items":{"$ref":"#/components/schemas/Taxonomieelement"}}}},"Fase":{"type":"object","required":["id","volgnummer","code","naam"],"properties":{"id":{"$ref":"#/components/schemas/Identifier"},"volgnummer":{"type":"string"},"code":{"type":"string"},"naam":{"type":"string"}}},"Onderwijsperiode":{"type":"object","required":["id","begindatum"],"properties":{"id":{"$ref":"#/components/schemas/Identifier"},"code":{"type":"string"},"begindatum":{"type":"string","format":"date"},"einddatum":{"type":"string","format":"date"},"begindatumtijdInschrijving":{"type":"string","format":"date-time"},"einddatumtijdInschrijving":{"type":"string","format":"date-time"},"einddatumtijdInschrijvingVoorMentor":{"type":"string","format":"date-time"},"productregelsoorten":{"type":"array","items":{"$ref":"#/components/schemas/Reference"}}}},"Organisatieeenheid":{"type":"object","required":["id","afkorting","naam","begindatum","soort"],"properties":{"id":{"$ref":"#/components/schemas/Identifier"},"afkorting":{"type":"string"},"naam":{"type":"string"},"begindatum":{"type":"string","format":"date"},"einddatum":{"type":"string","format":"date"},"soort":{"type":"object","required":["code","naam"],"properties":{"code":{"type":"string"},"naam":{"type":"string"}}},"parent":{"$ref":"#/components/schemas/Reference"},"children":{"type":"array","items":{"$ref":"#/components/schemas/Organisatieeenheid"}},"locaties":{"type":"array","items":{"type":"object","required":["locatie","begindatum"],"properties":{"locatie":{"$ref":"#/components/schemas/Reference"},"begindatum":{"type":"string","format":"date"},"einddatum":{"type":"string","format":"date"}}}}}},"Locatie":{"type":"object","required":["id","afkorting","naam"],"properties":{"id":{"$ref":"#/components/schemas/Identifier"},"afkorting":{"type":"string"},"naam":{"type":"string"}}},"Roosterstructuur":{"type":"object","required":["id","code","naam"],"properties":{"id":{"$ref":"#/components/schemas/Identifier"},"code":{"type":"string"},"naam":{"type":"string"},"organisatieenhedenLocaties":{"type":"array","items":{"type":"object","required":["organisatieenheid"],"properties":{"organisatieenheid":{"$ref":"#/components/schemas/Reference"},"locatie":{"$ref":"#/components/schemas/Reference"}}}}}},"Cohort":{"type":"object","required":["id","naam"],"properties":{"id":{"$ref":"#/components/schemas/Identifier"},"naam":{"type":"string"}}},"Paging":{"type":"object","properties":{"totalItems":{"type":"integer"},"page":{"type":"integer"},"pageSize":{"type":"integer"}}},"Identifier":{"type":"object","required":["externalId"],"properties":{"externalId":{"type":"string"},"internalId":{"type":"string"}}},"Error":{"type":"object","properties":{"code":{"type":"string","example":"INVALID_REFERENCE"},"detail":{"type":"string","example":"Productregelsoort niet gevonden"},"path":{"type":"string","example":"opleiding/cohort/2025-2026/productregel/P1ab/productregelsoort"}}},"ErrorResponse":{"type":"object","properties":{"errors":{"type":"array","items":{"$ref":"#/components/schemas/Error"}}}},"Reference":{"type":"object","required":["externalId","type"],"properties":{"externalId":{"type":"string"},"displayName":{"type":"string"},"type":{"type":"string"},"href":{"type":"string"}}}}}}}')}}]);