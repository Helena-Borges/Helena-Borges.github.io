<?php
    class Venda extends ClassePai {
        public $cliente;
        public $vendedor;//tipo Funcionario
        public $produtosVendidos;
        public $valorTotal;
 
        function montaLinhaDados()
        {
           //TODO...
        }
        static public function pegaPorId($id) {
            $arquivo = fopen("../../db/funcionario.txt", "r");
            while(!feof($arquivo)){
                $linha = fgets($arquivo);
                if(empty($linha))
                    continue;
                $dados = explode(self::SEPARADOR, $linha);
                if($dados[0] == $id){
                    fclose($arquivo);
                    return new Funcionario($dados[0], $dados[1], $dados[2], $dados[3]);
                }
            }
            fclose($arquivo);
        }
    }
?>