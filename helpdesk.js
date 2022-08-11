var config = {
    host: 'qap.epl.gov.br',
    prefix: '',
    port: '443',
    isSecure: true
}; 


require.config ( {
    baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port :  "") + config.prefix + "resources"
} );


require ( ["js/qlik"], function ( qlik ) {
        qlik.on( "error", function ( error) {
            $( '#popupText' ).append( error.message + "<br>" );
            $( '#popup' ).fadeIn ( 1000 ); 
        });
        $ ("#closePopup" ).click( function () {
            $('#popup').hide();
        });

        // open apps --colocar aqui--
        var app = qlik.openApp ( '3fb3805c-5667-45a5-afbf-54605feda214', config ); 
        
        
        // get objects -- colocar aqui--
        app.visualization.get('FHqkaMy').then(function(vis){
            vis.show("KPI - passageiros pagos");
        });
        app.visualization.get('mAddaSg').then(function(vis){
            vis.show("KPI - Passageiros gratis");
        });
        app.visualization.get('FHqkaMy').then(function(vis){
            vis.show("KPI - Decolagens domesticas");
        });
        app.visualization.get('aLtkXJb').then(function(vis){
            vis.show("Gráfico de Árvore - % de distribuição de cargas pagas e grátis por empresa");
        });
        app.visualization.get('mzSeg').then(function(vis){
            vis.show("Gráfico de linhas - Volume de Toneladas Quilômetros Transportadas nas companhias aéreas");
        });
        app.visualization.get('sBKYjbJ').then(function(vis){
            vis.show("Gráfico de mapa - Relação de decolagens origem - destino");
        });
        app.visualization.get('cDKHZc').then(function(vis){
            vis.show("Gráfico de barras - Transporte de cargas pagas entre 2021 a 2020");
        });
        app.visualization.get('NxsyzJf').then(function(vis){
            vis.show("Kpi - Carga correio");
        });
        app.visualization.get('dtUS').then(function(vis){
            vis.show("Kpi - Cargas pagas em 2021");
        });
        app.visualization.get('mWtskMr').then(function(vis){
            vis.show("Kpi - Volume de toneladas quilômetros transportadas");
        });
        app.visualization.get('GgyrJ').then(function(vis){
            vis.show("Cargas e Empresas");
        });
        app.visualization.get('VUeX').then(function(vis){
            vis.show("Decolagens e passageiros");
        });
        app.visualization.get('cCPwJsV').then(function(vis){
            vis.show("Gráfico de barras - Assentos disponíveis nas companhias aéreas");
        });


        function getCaseOwner (callback) {
            callback("Testando mashup"); 
        }

        getCaseOwner(function(caseOwner) {
            app.field("caseOwner").selectMatch(caseOwner)
            .then(function() {
                app.visualization.get('FHqkaMy').then(function(vis){
                    vis.show("KPI - passageiros pagos");
                });
                app.visualization.get('mAddaSg').then(function(vis){
                    vis.show("KPI - Passageiros gratis");
                });
                app.visualization.get('FHqkaMy').then(function(vis){
                    vis.show("KPI - Decolagens domesticas");
                });
                app.visualization.get('aLtkXJb').then(function(vis){
                    vis.show("Gráfico de Árvore - % de distribuição de cargas pagas e grátis por empresa");
                });
                app.visualization.get('mzSeg').then(function(vis){
                    vis.show("Gráfico de linhas - Volume de Toneladas Quilômetros Transportadas nas companhias aéreas");
                });
                app.visualization.get('sBKYjbJ').then(function(vis){
                    vis.show("Gráfico de mapa - Relação de decolagens origem - destino");
                });
                app.visualization.get('cDKHZc').then(function(vis){
                    vis.show("Gráfico de barras - Transporte de cargas pagas entre 2021 a 2020");
                });
                app.visualization.get('NxsyzJf').then(function(vis){
                    vis.show("Kpi - Carga correio");
                });
                app.visualization.get('dtUS').then(function(vis){
                    vis.show("Kpi - Cargas pagas em 2021");
                });
                app.visualization.get('mWtskMr').then(function(vis){
                    vis.show("Kpi - Volume de toneladas quilômetros transportadas");
                });
                app.visualization.get('GgyrJ').then(function(vis){
                    vis.show("Cargas e Empresas");
                });
                app.visualization.get('VUeX').then(function(vis){
                    vis.show("Decolagens e passageiros");
                });
                app.visualization.get('cCPwJsV').then(function(vis){
                    vis.show("Gráfico de barras - Assentos disponíveis nas companhiass aaéreas");
                });

            })
        })


}); 