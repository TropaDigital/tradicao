import Image from "next/image";
import { useState } from "react";
import MiniModal from "../../modal/MiniModal";
import moment from "moment";

import * as S from "./styles";
import { IRenderTD } from "./types";
import { CloseIcon, MenuIcon, PencilIcon } from "../../../../Svg";
import { Skeleton } from "@mui/material";

export default function RenderTD({
  head,
  item,
  isLoading,
  onClickOptions,
}: IRenderTD) {
  const [miniModal, setMiniModal] = useState<boolean>(false);

  const labelKey:
    | "peso"
    | "status"
    | "titulo"
    | "produtoImagens"
    | "id_produto"
    | "criado" = head.key;

  return (
    <S.Container id="td">
      {head.type === "date" && isLoading ? (
        <Skeleton width={80} />
      ) : (
        head.type === "date" && (
          <span>{moment(item.criado).format("DD/MM/YYYY")}</span>
        )
      )}
      {head.type === "options" && (
        <button
          className="buttonOptions"
          onClick={() => {
            setMiniModal(!miniModal);
          }}
        >
          <MenuIcon />
          {miniModal && (
            <MiniModal
              onClick={(modalType) => {
                onClickOptions(modalType, item);
              }}
              closeModal={() => {
                setMiniModal(false);
              }}
              options={[
                {
                  label: "Editar",
                  value: "editar",
                },
                {
                  label: "Visualizar",
                  value: "visualizar",
                },
                {
                  label: "Excluir",
                  value: "excluir",
                },
              ]}
            />
          )}
        </button>
      )}
      {head.type === "status" && isLoading ? (
        <Skeleton width={35} />
      ) : (
        head.type === "status" && (
          <span className={item[head.key] as string}>
            {item.status.toLowerCase() === "ativo" ? "Ativo" : "Inativo"}
          </span>
        )
      )}

      {head.type === "select_product" && <span>{item[labelKey]}</span>}

      {head.type === "string" && isLoading ? (
        <Skeleton width={120} />
      ) : (
        head.type === "string" && <span>{item[labelKey] as string}</span>
      )}

      {head.type === "number" && isLoading ? (
        <Skeleton width={80} />
      ) : (
        head.type === "number" && <span>{item[labelKey] as number}</span>
      )}

      {head.type === "image" && isLoading ? (
        <Skeleton width={60} height={60} variant="rounded" />
      ) : (
        head.type === "image" && (
          <div style={{ width: "60px", height: "60px" }}>
            <Image
              alt={head?.label}
              width={60}
              height={60}
              src={item?.produtoImagens ? item?.produtoImagens[0] : "https://via.placeholder.com/3000"}
            />
          </div>
        )
      )}
    </S.Container>
  );
}
