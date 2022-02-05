import styles from './MoreInfo.module.css'

export default function MoreInfo() {
    return (
        <section className={styles.moreInfo}>
            <div className="container px-4 md:py:12 md:px-12 rounded-tl-large rounded-bl-large shadow-xl bg-white ml-auto w-85">
                <div className="grid grid-cols-2">
                    <div className="md:py:12">
                        <h1 className="text-2xl font-extrabold text-gray-500 mb-6"> No chore is worth your time </h1>
                        <p className="font-medium text-sm text-black">
                            Save 10+ hours, take control of your weekends. Let us worry about your chores,
                            we pick up and deliver to your doorstep in 48 hours.
                        </p>
                    </div>



                </div>

            </div>
        </section>
    )
}