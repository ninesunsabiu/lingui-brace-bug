import { msg } from "@lingui/macro"
import { useLingui } from "@lingui/react";

const title = msg`hi`

type Props = {
    onChange?: (msg: string) => void
}

export const Title = (props: Props) => {
    const { _ } = useLingui()
    return <h1>{_(title)}</h1>
}