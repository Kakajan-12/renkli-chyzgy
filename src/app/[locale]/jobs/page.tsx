import {useTranslations} from "next-intl";
import Image from "next/image";

export default function Jobs() {
    const t = useTranslations('Jobs')
    return (
        <div className="py-20 sm:py-26">
            <div className="container mx-auto px-4">
                <div className="w-full py-56 main-bg-color flex justify-center items-center">
                    <Image src="/about.png" alt="logo"
                           width={256} height={256}/>
                </div>
                <div className="w-full space-y-4 my-6">
                    <div className="text-4xl md:text-6xl font-bold">{t('title')}</div>
                    <div className="text-lg md:text-xl text-gray-600 text-right">{t('description')}</div>
                </div>
                <form action="">
                    <div className="flex flex-col w-fit space-y-4">
                        <label>{t('photo')}</label>
                        <input type="file" hidden/>
                        <button className="main-bg-color p-4 text-white">{t('attach')}</button>
                    </div>
                    <div className="flex flex-col max-w-2xl w-full py-4 space-y-6">
                        <input type="text"
                               placeholder={t('full-name')}
                               required
                               className="border-b w-full"/>
                        <input type="text"
                               placeholder={t('email')}
                               required
                               className="border-b w-full"/>
                        <input type="text"
                               placeholder={t('phone')}
                               required
                               className="border-b w-full"/>
                        <input type="text"
                               placeholder={t('bday')}
                               required
                               className="border-b w-full"/>
                        <input type="text"
                               placeholder={t('residence')}
                               required
                               className="border-b w-full"/>
                        <div className="flex flex-col w-full space-y-2">
                            <label>{t('education')}</label>
                            <select className="border py-2 px-4">
                                <option value="secondary">{t('secondary')}</option>
                                <option value="higher">{t('higher')}</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <div>{t('profession')}</div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('graphic-designer')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('illustrator')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('photographer')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('animator')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('visualizer')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('ui/ux')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('3d-model-maker')}</label>
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <div>{t('knowledge')}</div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('knowledge-illustrator')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('knowledge-photoshop')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('knowledge-indesign')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('knowledge-coral')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('knowledge-max')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('knowledge-cinema')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('knowledge-effect')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('knowledge-lightroom')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('knowledge-blender')}</label>
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <div>{t('language')}</div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('turkmen')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('russian')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('english')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('chinese')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('french')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="checkbox"/>
                                <label>{t('german')}</label>
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <div>{t('full-time')}</div>
                            <div className="space-x-2 flex items-center">
                                <input type="radio"/>
                                <label>{t('yes')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="radio"/>
                                <label>{t('no')}</label>
                            </div>
                            <div className="space-x-2 flex items-center">
                                <input type="radio"/>
                                <label>{t('other')}</label>
                            </div>
                        </div>
                        <div>
                            <div>{t('comment')}</div>
                            <textarea className="border w-full h-72"></textarea>
                        </div>
                    </div>
                    <button className="main-bg-color py-2 px-6 text-white">{t('send')}</button>
                </form>
            </div>
        </div>
    )
}