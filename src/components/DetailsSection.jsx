import { CTASection } from './CTASection';
import { DetailedProduct } from './DetailedProduct';

export const DetailsSection = (props) => {

  return (
    <div className='flex flex-col p-6 gap-3'>
        <DetailedProduct />
        <CTASection props={props}/>
    </div>
  )
}
