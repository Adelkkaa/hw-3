import { Loader } from "../Loader/Loader";

export type WithLoaderProps = React.PropsWithChildren<{
    loading: boolean;
  }>;

export const WithLoader:React.FC<WithLoaderProps> = ({loading, children}) => {
    return (
        <>
          {loading ? (
            <>
              {children}
              <div style ={{position: 'relative'}}>
              <div style={{position: 'absolute', right: '50%'}}> <Loader /> </div>
              </div>
            </>
          ) : (
            <> {children} </>
          )}
        </>
      );
}
