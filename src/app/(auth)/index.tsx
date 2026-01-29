import { Image, Text, View } from "react-native";
import i18n from "@/lib/i18n";

export default function Index() {
    const { t } = i18n;

    return (
        <View className="flex text-center justify-center items-center">
            <View className="flex flex-col justify-center items-center">
                <View className="max-w-sm">
                    <Image resizeMode="contain" className="w-20 h-20 rounded-full" source={require('@/assets/images/icon.png')} />
                </View>
                <Text className="text-2xl font-bold tracking-tight text-transparent md:text-3xl dark:to-zinc-400">{t("auth.welcome")} {t("app.name")}</Text>
            </View>
        </View>
    );
}